import styled from "styled-components";
import CssGradient from "./CssGradient";
import Starfield2D from "./Starfield2D";
import SpaceClutter from "./SpaceClutter";
import PlanetButton from "./PlanetButton";
import { PLANETS } from "../../data/galaxyLayout";
import { IconNavButton } from "../../styles/globalStyles";
import { EnvironmentId } from "../../types/scene";

interface GalaxySceneProps {
  onSelectPlanet: (id: EnvironmentId) => void;
  onBack: () => void;
}

// Navigation hub: a vibrant drifting gradient + a seamless drifting starfield
// "river", with five still/floating object-portals as DOM buttons over the top.
export default function GalaxyScene({ onSelectPlanet, onBack }: GalaxySceneProps) {
  return (
    <Sky>
      <CssGradient />
      <Starfield2D />
      <SpaceClutter />

      {PLANETS.map((planet) => (
        <PlanetButton key={planet.id} planet={planet} onSelect={onSelectPlanet} />
      ))}

      <IconNavButton type="button" onClick={onBack} aria-label="Back to the wormhole">
        <BackIcon src="/galaxy/spiral-galaxy.svg" alt="" draggable={false} />
      </IconNavButton>
    </Sky>
  );
}

const Sky = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  background: #05061a;
`;

// The spiral-galaxy glyph ships as solid black; recolour it to a warm cream so
// it reads on the dark glass button.
const BackIcon = styled.img`
  width: 26px;
  height: 26px;
  filter: invert(1) sepia(0.35) saturate(1.4) brightness(1.02);
`;
