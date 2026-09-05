import { useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import { motion } from "framer-motion";
import { floatBob } from "../../styles/animations";

interface WormholeSceneProps {
  onEnter: () => void;
}

type Phase = "idle" | "asking" | "accepted" | "declined";

// Reveals text one character at a time for a game-dialogue feel. Retypes when
// `text` changes (each phase passes a new line).
function Typewriter({ text, speed = 26 }: { text: string; speed?: number }) {
  const [n, setN] = useState(0);
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
  return <>{text.slice(0, n)}</>;
}

// One dialogue line kept to a single row. A hidden full-text copy reserves the
// box width up front, so the box doesn't grow (or jog the buttons) as the
// typewriter fills in the visible copy on top of it.
function TypeLine({ text }: { text: string }) {
  return (
    <Line>
      <Ghost aria-hidden>{text}</Ghost>
      <Typed>
        <Typewriter text={text} />
      </Typed>
    </Line>
  );
}

// Landing: a wormhole portal on a dark, drifting starfield, with the astronaut
// (Adelicia) as a game-style NPC. Click her to talk; help her home and she
// points at the wormhole, or decline and get sucked in anyway. No title text.
export default function WormholeScene({ onEnter }: WormholeSceneProps) {
  const [entering, setEntering] = useState(false);
  const [phase, setPhase] = useState<Phase>("idle");

  const decline = () => {
    setPhase("declined");
    window.setTimeout(() => setEntering(true), 1400);
  };

  return (
    <Stage
      animate={entering ? { scale: 1.4, opacity: 0 } : { scale: 1, opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeIn" }}
      onAnimationComplete={() => {
        if (entering) onEnter();
      }}
    >
      <Clutter aria-hidden />

      <Portal
        type="button"
        disabled={entering}
        onClick={() => setEntering(true)}
        aria-label="Enter...?"
        $highlight={phase === "accepted"}
      >
        <Wormhole src="/landing-wormhole.svg" alt="" draggable={false} />
      </Portal>

      <Astronaut
        type="button"
        disabled={phase !== "idle" || entering}
        onClick={() => setPhase("asking")}
        aria-label="Talk to the astronaut"
      >
        {phase === "idle" && <Marker aria-hidden>!</Marker>}
        <AstronautImg src="/objects/astronaut.png" alt="Adelicia the astronaut" draggable={false} />
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
            <TypeLine text="Thanks a lot! Just click on that swirly thing over there.. er that should help!" />
          )}
          {phase === "declined" && (
            <TypeLine text="Hmph. Ok. You've made *it* angry." />
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
  background: url("/landing-clutter.svg") repeat;
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

const Portal = styled.button<{ $highlight: boolean }>`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: min(54vmin, 560px);
  aspect-ratio: 1;
  padding: 0;
  border: none;
  border-radius: 50%;
  background: transparent;
  cursor: pointer;
  transition: transform 0.4s ease, filter 0.4s ease;
  filter: drop-shadow(0 0 24px rgba(120, 90, 220, 0.35));

  &:hover {
    filter: drop-shadow(0 0 44px rgba(150, 110, 255, 0.6));
  }

  ${(p) =>
    p.$highlight &&
    css`
      animation: ${highlightPulse} 1.8s ease-in-out infinite;
    `}

  &:disabled {
    cursor: default;
  }
`;

const Wormhole = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  animation: ${spin} 60s linear infinite;
`;

const Astronaut = styled.button`
  position: absolute;
  left: 70%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  width: 13vmin;
  min-width: 110px;
  aspect-ratio: 0.604;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover:not(:disabled) {
    transform: translate(-50%, -50%) scale(1.05);
  }

  &:disabled {
    cursor: default;
  }
`;

const AstronautImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: drop-shadow(0 0 12px rgba(180, 210, 255, 0.25));
  animation: ${floatBob} 5s ease-in-out infinite;
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
