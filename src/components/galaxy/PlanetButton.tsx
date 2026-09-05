import styled, { css } from "styled-components";
import { EnvironmentId, PlanetPlacement } from "../../types/scene";
import { floatBob } from "../../styles/animations";

interface PlanetButtonProps {
  planet: PlanetPlacement;
  onSelect: (id: EnvironmentId) => void;
}

// A navigable galaxy object as a clickable DOM button. Planets stay still;
// characters (astronaut, rocket) gently float. Hover: scale-up + stronger glow,
// with the name fading in below.
export default function PlanetButton({ planet, onSelect }: PlanetButtonProps) {
  return (
    <Btn
      type="button"
      style={{
        left: `${planet.xPct}%`,
        top: `${planet.yPct}%`,
        width: `${planet.sizeVmin}vmin`,
        aspectRatio: `${planet.aspect ?? 1}`,
      }}
      onClick={() => onSelect(planet.id)}
      aria-label={`Enter ${planet.label}`}
    >
      <Img src={planet.src} alt={planet.label} draggable={false} $float={!!planet.float} />
      <Label>{planet.label}</Label>
    </Btn>
  );
}

const Btn = styled.button`
  position: absolute;
  transform: translate(-50%, -50%);
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  transition: transform 0.35s ease;

  &:hover {
    transform: translate(-50%, -50%) scale(1.08);
  }
`;

const Img = styled.img<{ $float: boolean }>`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.12));
  transition: filter 0.35s ease;
  ${(p) =>
    p.$float &&
    css`
      animation: ${floatBob} 5s ease-in-out infinite;
    `}

  ${Btn}:hover & {
    filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.4))
      drop-shadow(0 0 44px rgba(150, 220, 255, 0.4));
  }
`;

const Label = styled.span`
  position: absolute;
  left: 50%;
  bottom: -1.8rem;
  transform: translateX(-50%);
  font-family: "Inter", sans-serif;
  font-size: 0.8rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: #f4e7c1;
  text-shadow: 0 1px 8px rgba(0, 0, 0, 0.8);
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;

  ${Btn}:hover & {
    opacity: 1;
  }
`;
