import { lazy, Suspense } from "react";
import { AnimatePresence, motion } from "framer-motion";
import WormholeScene from "./landing/WormholeScene";
import PlaceholderEnv from "./environments/PlaceholderEnv";
import { useSceneMachine } from "../hooks/useSceneMachine";
import { isEnvironment } from "../types/scene";

// Lazy so the galaxy's assets/CSS land in a separate chunk, loaded only once the
// visitor leaves the landing.
const GalaxyScene = lazy(() => import("./galaxy/GalaxyScene"));

const variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export default function SceneMachine() {
  const { scene, enterGalaxy, enterEnvironment, backToLanding } =
    useSceneMachine();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={scene}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.6 }}
        style={{ position: "absolute", inset: 0 }}
      >
        {scene === "landing" && <WormholeScene onEnter={enterGalaxy} />}
        {scene === "galaxy" && (
          <Suspense fallback={null}>
            <GalaxyScene onSelectPlanet={enterEnvironment} onBack={backToLanding} />
          </Suspense>
        )}
        {isEnvironment(scene) && <PlaceholderEnv id={scene} onBack={enterGalaxy} />}
      </motion.div>
    </AnimatePresence>
  );
}
