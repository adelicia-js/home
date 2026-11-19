import { lazy, Suspense } from "react";
import { AnimatePresence, motion } from "framer-motion";
import WormholeScene from "./landing/WormholeScene";
import PlaceholderEnv from "./environments/PlaceholderEnv";
import { useSceneMachine } from "../hooks/useSceneMachine";
import { isEnvironment } from "../types/scene";

// Lazy so the galaxy's assets/CSS land in a separate chunk, loaded only once the
// visitor leaves the landing. Named so it can be preloaded during the landing warp
// (import() is cached, so preloading and lazy() sharing it is free/deduped).
const importGalaxy = () => import("./galaxy/GalaxyScene");
const GalaxyScene = lazy(importGalaxy);

// Cover crossfade: the incoming scene fades in ON TOP (zIndex 2) while the outgoing
// holds fully opaque underneath (zIndex 1) until it's covered, then unmounts. Every
// scene root paints an opaque background, so black never shows through the transition.
// The exit uses a [1, 1] keyframe (not a plain `opacity: 1`) so framer runs a real
// animation and keeps the outgoing mounted for the crossfade instead of unmounting
// it on the next frame.
const variants = {
  initial: { opacity: 0, zIndex: 2 },
  animate: { opacity: 1, zIndex: 2, transition: { duration: 0.6 } },
  exit: { opacity: [1, 1], zIndex: 1, transition: { duration: 0.6 } },
};

export default function SceneMachine() {
  const { scene, enterGalaxy, enterEnvironment, backToLanding } =
    useSceneMachine();

  return (
    <AnimatePresence initial={false}>
      <motion.div
        key={scene}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        style={{ position: "absolute", inset: 0 }}
      >
        {scene === "landing" && (
          <WormholeScene onEnter={enterGalaxy} onPreload={importGalaxy} />
        )}
        {scene === "galaxy" && (
          <Suspense fallback={<SuspenseFallback />}>
            <GalaxyScene onSelectPlanet={enterEnvironment} onBack={backToLanding} />
          </Suspense>
        )}
        {isEnvironment(scene) && <PlaceholderEnv id={scene} onBack={enterGalaxy} />}
      </motion.div>
    </AnimatePresence>
  );
}

// Galaxy-dark backdrop shown only if the lazy chunk isn't ready yet (cold cache),
// matching GalaxyScene's `Sky` background so a slow load never flashes AppRoot black.
function SuspenseFallback() {
  return (
    <div style={{ position: "absolute", inset: 0, background: "#05061a" }} />
  );
}
