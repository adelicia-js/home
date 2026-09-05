import { useState, useEffect, useRef } from "react";
import styled, { keyframes, css } from "styled-components";
import { motion, useAnimationControls } from "framer-motion";
import { floatBob } from "../../styles/animations";

interface WormholeSceneProps {
  onEnter: () => void;
}

type Phase = "idle" | "asking" | "accepted" | "declined";

// Reveals text one character at a time for a game-dialogue feel. Retypes when
// `text` changes (each phase passes a new line). Calls `onDone` once the line
// has fully typed out.
function Typewriter({
  text,
  speed = 26,
  onDone,
}: {
  text: string;
  speed?: number;
  onDone?: () => void;
}) {
  const [n, setN] = useState(0);
  const onDoneRef = useRef(onDone);
  onDoneRef.current = onDone;

  useEffect(() => {
    setN(0);
    const id = window.setInterval(() => {
      setN((c) => {
        if (c >= text.length) {
          window.clearInterval(id);
          return c;
        }
        return c + 1;
      });
    }, speed);
    return () => window.clearInterval(id);
  }, [text, speed]);

  const done = n >= text.length && text.length > 0;
  useEffect(() => {
    if (done) onDoneRef.current?.();
  }, [done]);

  return <>{text.slice(0, n)}</>;
}

// One dialogue line kept to a single row. A hidden full-text copy reserves the
// box width up front, so the box doesn't grow (or jog the buttons) as the
// typewriter fills in the visible copy on top of it.
function TypeLine({ text, onDone }: { text: string; onDone?: () => void }) {
  return (
    <Line>
      <Ghost aria-hidden>{text}</Ghost>
      <Typed>
        <Typewriter text={text} onDone={onDone} />
      </Typed>
    </Line>
  );
}

// Landing: a wormhole portal on a dark, drifting starfield, with the astronaut
// (Adelicia) as a game-style NPC. Click her to talk. Help her home and she
// becomes draggable — drag her into the wormhole to enter. Decline and the
// wormhole turns red, shakes, and sucks you in anyway. No title text.
export default function WormholeScene({ onEnter }: WormholeSceneProps) {
  const [entering, setEntering] = useState(false);
  const [phase, setPhase] = useState<Phase>("idle");
  const [angry, setAngry] = useState(false);

  const stageRef = useRef<HTMLDivElement>(null);
  const portalRef = useRef<HTMLDivElement>(null);
  const astronautRef = useRef<HTMLButtonElement>(null);
  const dropControls = useAnimationControls();

  const decline = () => setPhase("declined");

  // After the "you've made it angry" line finishes, the wormhole goes red +
  // shakes for a beat, then pulls everything in.
  const handleDeclinedDone = () => {
    setAngry(true);
    window.setTimeout(() => setEntering(true), 1400);
  };

  // Dropped the astronaut: if her centre landed inside the wormhole, she shrinks
  // into it (no bounce) and the scene zooms in. Otherwise she springs back home.
  const handleDrop = () => {
    const a = astronautRef.current?.getBoundingClientRect();
    const p = portalRef.current?.getBoundingClientRect();
    if (!a || !p) return;
    const dist = Math.hypot(
      a.left + a.width / 2 - (p.left + p.width / 2),
      a.top + a.height / 2 - (p.top + p.height / 2)
    );
    if (dist < p.width / 2) {
      dropControls.start({
        scale: 0,
        opacity: 0,
        transition: { duration: 0.4, ease: "easeIn" },
      });
      setEntering(true);
    } else {
      dropControls.start({
        x: 0,
        y: 0,
        transition: { type: "spring", stiffness: 300, damping: 22 },
      });
    }
  };

  return (
    <Stage
      ref={stageRef}
      animate={
        entering
          ? { scale: [1, 3.2, 6], opacity: [1, 1, 0] }
          : { scale: 1, opacity: 1 }
      }
      transition={{ duration: 0.85, ease: "easeIn", times: [0, 0.6, 1] }}
      onAnimationComplete={() => {
        if (entering) onEnter();
      }}
    >
      <Clutter aria-hidden />

      <Portal ref={portalRef} aria-hidden $highlight={phase === "accepted"} $angry={angry}>
        <Wormhole src="/landing/wormhole.webp" alt="" draggable={false} $angry={angry} />
      </Portal>

      <Astronaut
        ref={astronautRef}
        type="button"
        disabled={phase === "asking" || phase === "declined" || entering}
        onClick={() => phase === "idle" && setPhase("asking")}
        aria-label="Talk to the astronaut"
        $grab={phase === "accepted"}
        drag={phase === "accepted"}
        dragConstraints={stageRef}
        dragElastic={0.15}
        animate={dropControls}
        onDragEnd={handleDrop}
      >
        {phase === "idle" && <Marker aria-hidden>!</Marker>}
        <AstronautImg
          src="/objects/astronaut.webp"
          alt="Adelicia the astronaut"
          draggable={false}
          $still={phase === "accepted"}
        />
      </Astronaut>

      {phase !== "idle" && (
        <Dialogue
          role="dialog"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {phase === "asking" && (
            <>
              <TypeLine text="Hey there, I'm Adelicia. I'm stranded here. Can you help me get home?" />
              <Choices>
                <Choice type="button" onClick={() => setPhase("accepted")}>
                  Yes
                </Choice>
                <Choice type="button" onClick={decline}>
                  No
                </Choice>
              </Choices>
            </>
          )}
          {phase === "accepted" && (
            <TypeLine text="Thanks a lot! Just drag me into the swirly thing over there... er that should help!" />
          )}
          {phase === "declined" && (
            <TypeLine text="Hmph. Ok. You've made *it* angry." onDone={handleDeclinedDone} />
          )}
        </Dialogue>
      )}
    </Stage>
  );
}

const Stage = styled(motion.div)`
  position: absolute;
  inset: 0;
  overflow: hidden;
  background: radial-gradient(
    circle at 34% 50%,
    #1a1030 0%,
    #0a0714 42%,
    #05040c 75%,
    #030208 100%
  );
`;

const drift = keyframes`
  from { background-position: 0 0; }
  to { background-position: 3600px 972px; }
`;

const Clutter = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: url("/landing/clutter.webp") repeat;
  background-size: 1200px 680px;
  opacity: 0.9;
  animation: ${drift} 260s linear infinite;
`;

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const highlightPulse = keyframes`
  0%, 100% { filter: drop-shadow(0 0 26px rgba(150, 110, 255, 0.5)); }
  50% { filter: drop-shadow(0 0 60px rgba(170, 130, 255, 0.9)); }
`;

// Angry shake. Safe to animate `transform` here because the portal is centred
// with the independent `translate` property, so the two don't fight.
const shake = keyframes`
  0%, 100% { transform: translate(0, 0); }
  25% { transform: translate(-2px, 1px); }
  50% { transform: translate(2px, -1px); }
  75% { transform: translate(-1px, 1px); }
`;

// Decorative drop target — never clickable (entry is drag-only), so it's a div,
// not a button. Centred via `translate` so `transform` stays free for the shake.
const Portal = styled.div<{ $highlight: boolean; $angry: boolean }>`
  position: absolute;
  left: 50%;
  top: 50%;
  translate: -50% -50%;
  z-index: 2;
  width: min(54vmin, 560px);
  aspect-ratio: 1;
  border-radius: 50%;
  pointer-events: none;
  filter: drop-shadow(0 0 24px rgba(120, 90, 220, 0.35));
  transition: filter 0.4s ease;

  ${(p) =>
    p.$highlight &&
    css`
      animation: ${highlightPulse} 1.8s ease-in-out infinite;
    `}

  ${(p) =>
    p.$angry &&
    css`
      animation: ${shake} 0.4s ease-in-out infinite;
      filter: drop-shadow(0 0 46px rgba(255, 45, 45, 0.8));
    `}
`;

const Wormhole = styled.img<{ $angry: boolean }>`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  animation: ${spin} 60s linear infinite;
  transition: filter 0.5s ease;
  filter: ${(p) =>
    p.$angry
      ? "sepia(1) saturate(6) hue-rotate(320deg) brightness(0.9)"
      : "none"};
`;

const Astronaut = styled(motion.button)<{ $grab: boolean }>`
  position: absolute;
  left: 70%;
  top: 50%;
  translate: -50% -50%;
  z-index: 3;
  width: 13vmin;
  min-width: 110px;
  aspect-ratio: 0.604;
  padding: 0;
  border: none;
  background: transparent;
  cursor: ${(p) => (p.$grab ? "grab" : "pointer")};
  transition: scale 0.3s ease;

  &:hover:not(:disabled) {
    scale: 1.05;
  }

  &:active {
    cursor: ${(p) => (p.$grab ? "grabbing" : "pointer")};
  }

  &:disabled {
    cursor: default;
  }
`;

const AstronautImg = styled.img<{ $still: boolean }>`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: drop-shadow(0 0 12px rgba(180, 210, 255, 0.25));
  animation: ${floatBob} 5s ease-in-out infinite;
  ${(p) =>
    p.$still &&
    css`
      animation: none;
    `}
`;

const markerBob = keyframes`
  0%, 100% { transform: translate(-50%, 0); }
  50% { transform: translate(-50%, -8px); }
`;

const Marker = styled.span`
  position: absolute;
  left: 40%;
  top: -15%;
  transform: translate(-50%, 0);
  font-family: ${({ theme }) => theme.fonts.pixel};
  font-weight: 700;
  font-size: clamp(1.4rem, 3vmin, 2.2rem);
  color: #ffd23f;
  text-shadow: 0 0 10px rgba(255, 210, 63, 0.9), 0 2px 4px rgba(0, 0, 0, 0.6);
  animation: ${markerBob} 1.3s ease-in-out infinite;
  pointer-events: none;
`;

const Dialogue = styled(motion.div)`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 5%;
  margin-inline: auto;
  z-index: 4;
  width: fit-content;
  max-width: 94vw;
  padding: 1rem 1.2rem;
  font-family: ${({ theme }) => theme.fonts.pixel};
  color: #e9e4f6;
  background: rgba(10, 8, 22, 0.72);
  border: 2px solid rgba(180, 150, 255, 0.5);
  border-radius: 8px;
  backdrop-filter: blur(4px);
  box-shadow: 0 0 24px rgba(120, 90, 220, 0.25);
`;

const Line = styled.p`
  position: relative;
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.pixel};
  font-size: 0.78rem;
  line-height: 1.7;
  white-space: nowrap;
`;

// Reserves the full line width but stays invisible; the typed copy sits on top.
// Both carry the pixel font explicitly so the global `*` reset can't force the
// base font onto them (and so their widths match exactly).
const Ghost = styled.span`
  font-family: ${({ theme }) => theme.fonts.pixel};
  visibility: hidden;
`;

const Typed = styled.span`
  position: absolute;
  left: 0;
  top: 0;
  font-family: ${({ theme }) => theme.fonts.pixel};
`;

const Choices = styled.div`
  display: flex;
  gap: 0.6rem;
  margin-top: 0.9rem;
`;

const Choice = styled.button`
  flex: 1;
  padding: 0.5rem 0.8rem;
  font-family: ${({ theme }) => theme.fonts.pixel};
  font-size: 0.72rem;
  color: #e9e4f6;
  background: rgba(180, 150, 255, 0.12);
  border: 1px solid rgba(180, 150, 255, 0.4);
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.1s ease;

  &:hover {
    background: rgba(180, 150, 255, 0.28);
  }

  &:active {
    transform: translateY(1px);
  }
`;
