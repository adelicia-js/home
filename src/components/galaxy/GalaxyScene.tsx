import { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import CssGradient from "./CssGradient";
import Starfield2D from "./Starfield2D";
import SpaceClutter from "./SpaceClutter";
import PlanetButton from "./PlanetButton";
import { PLANETS } from "../../data/galaxyLayout";
import { IconNavButton } from "../../styles/globalStyles";
import { EnvironmentId, PlanetPlacement } from "../../types/scene";

interface GalaxySceneProps {
  onSelectPlanet: (id: EnvironmentId) => void;
  onBack: () => void;
}

// Navigation hub: a vibrant drifting gradient + a seamless drifting starfield
// "river", with five still/floating object-portals as DOM buttons over the top.
export default function GalaxyScene({ onSelectPlanet, onBack }: GalaxySceneProps) {
  // Which planet we're diving into (null = idle). Characters (float:true) skip the
  // zoom and navigate straight away; the 3 planets dive in like the wormhole.
  const [zoom, setZoom] = useState<PlanetPlacement | null>(null);

  const handleSelect = (id: EnvironmentId) => {
    const planet = PLANETS.find((p) => p.id === id)!;
    if (planet.float) {
      onSelectPlanet(id); // characters: plain crossfade
      return;
    }
    setZoom(planet); // planets: zoom into it, then navigate on completion
  };

  return (
    <Sky>
      <ZoomStage
        animate={
          zoom ? { scale: [1, 3.2, 6], opacity: [1, 1, 0] } : { scale: 1, opacity: 1 }
        }
        transition={{ duration: 0.85, ease: "easeIn", times: [0, 0.6, 1] }}
        style={{
          transformOrigin: zoom ? `${zoom.xPct}% ${zoom.yPct}%` : "center",
          pointerEvents: zoom ? "none" : "auto",
        }}
        onAnimationComplete={() => {
          if (zoom) onSelectPlanet(zoom.id);
        }}
      >
        <CssGradient />
        <Starfield2D />
        <SpaceClutter />

        {PLANETS.map((planet) => (
          <PlanetButton key={planet.id} planet={planet} onSelect={handleSelect} />
        ))}

        <IconNavButton type="button" onClick={onBack} aria-label="Back to the wormhole">
          <BackIcon src="/galaxy/spiral-galaxy.svg" alt="" draggable={false} />
        </IconNavButton>
      </ZoomStage>
    </Sky>
  );
}

const Sky = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  background: #05061a;
`;

// Holds every galaxy layer so a planet click can zoom the whole scene into the
// chosen planet (transform-origin set to its position) before navigating.
const ZoomStage = styled(motion.div)`
  position: absolute;
  inset: 0;
`;

// The spiral-galaxy glyph ships as solid black; recolour it to a warm cream so
// it reads on the dark glass button.
const BackIcon = styled.img`
  width: 26px;
  height: 26px;
  filter: invert(1) sepia(0.35) saturate(1.4) brightness(1.02);
`;
