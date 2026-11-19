import styled, { keyframes } from "styled-components";
import { IconNavButton } from "../../styles/globalStyles";

interface ProjectsEnvProps {
  onBack: () => void;
}

// Static layout matching the mockup: a flat platform rock lower-left with the
// astronaut standing on it, and four more rocks scattered across the field.
// Positions are % of the scene; widths in vmin so the field scales with the
// viewport. For now nothing here moves except the backdrop gradient.
const ROCKS = [
  { src: "/galaxy/projects/rock-3.webp", xPct: 17, yPct: 63, wVmin: 27 }, // platform
  { src: "/galaxy/projects/rock-1.webp", xPct: 39, yPct: 26, wVmin: 20 },
  { src: "/galaxy/projects/rock-2.webp", xPct: 67, yPct: 30, wVmin: 20 },
  { src: "/galaxy/projects/rock-4.webp", xPct: 48, yPct: 72, wVmin: 22 },
  { src: "/galaxy/projects/rock-5.webp", xPct: 81, yPct: 71, wVmin: 18 },
];

// The projects environment: floating rocks in space with the astronaut perched
// on one, over a slowly drifting orange/blue-purple gradient. Milestone: fill in
// the actual project content next; for now it's the set dressing only.
export default function ProjectsEnv({ onBack }: ProjectsEnvProps) {
  return (
    <Scene>
      <Gradient />
      <Clutter />

      {ROCKS.map((rock) => (
        <Rock
          key={rock.src}
          src={rock.src}
          alt=""
          draggable={false}
          style={{ left: `${rock.xPct}%`, top: `${rock.yPct}%`, width: `${rock.wVmin}vmin` }}
        />
      ))}

      <Astronaut src="/objects/astronaut.webp" alt="Astronaut" draggable={false} />

      <IconNavButton type="button" onClick={onBack} aria-label="Back to the galaxy">
        <BackIcon src="/galaxy/spiral-galaxy.svg" alt="" draggable={false} />
      </IconNavButton>
    </Scene>
  );
}

const Scene = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  background: ${({ theme }) => theme.play.night};
`;

// The one moving element: an oversized gradient whose position ping-pongs, so it
// eases start -> end -> start with no loop jump. Warm orange core drifting between
// indigo/purple edges, matching the mockup.
const drift = keyframes`
  from { background-position: 0% 50%; }
  to { background-position: 100% 50%; }
`;

const Gradient = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    120deg,
    #0e0a2e 0%,
    #24084e 15%,
    #7a3a5a 30%,
    #c9701f 45%,
    #f0a53a 55%,
    #b5641e 66%,
    #4c2a80 80%,
    #1a1350 92%,
    #0e0a2e 100%
  );
  background-size: 260% 100%;
  animation: ${drift} 42s ease-in-out infinite alternate;
`;

// The landing's star field, reused here with its slow 260s drift.
const clutterDrift = keyframes`
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
  animation: ${clutterDrift} 260s linear infinite;
`;

const Rock = styled.img`
  position: absolute;
  height: auto;
  transform: translate(-50%, -50%);
  filter: drop-shadow(0 10px 22px rgba(0, 0, 0, 0.45));
  pointer-events: none;
  user-select: none;
`;

// Stands on the platform rock (lower-left). Sits just above it and to the side so
// her feet meet the rock's top surface.
const Astronaut = styled.img`
  position: absolute;
  left: 17%;
  top: 54%;
  width: 8vmin;
  height: auto;
  transform: translate(-65%, -93%) scaleX(-1);
  rotate: 12deg;
  filter: drop-shadow(0 8px 16px rgba(0, 0, 0, 0.5));
  pointer-events: none;
  user-select: none;
`;

// The spiral-galaxy glyph ships as solid black; recolour it to a warm cream so it
// reads on the dark glass button (matches the galaxy's back button).
const BackIcon = styled.img`
  width: 26px;
  height: 26px;
  filter: invert(1) sepia(0.35) saturate(1.4) brightness(1.02);
`;
