import { useState, useCallback, lazy, Suspense } from "react";
import { AnimatePresence, motion } from "framer-motion";
import WormholeScene from "./scenes/WormholeScene";
import PlaceholderEnv from "./scenes/PlaceholderEnv";
import { SceneId, EnvironmentId } from "./types";

// Lazy so the galaxy's assets/CSS land in a separate chunk, loaded only once the
// visitor leaves the landing.
const GalaxyScene = lazy(() => import("./scenes/GalaxyScene"));

const variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const isEnvironment = (scene: SceneId): scene is EnvironmentId =>
  scene === "about" ||
  scene === "projects" ||
  scene === "resume" ||
  scene === "contact" ||
  scene === "hobbies";

export default function SceneMachine() {
  const [scene, setScene] = useState<SceneId>("landing");

  const enterGalaxy = useCallback(() => setScene("galaxy"), []);
  const enterEnvironment = useCallback((id: EnvironmentId) => setScene(id), []);
  const backToLanding = useCallback(() => setScene("landing"), []);

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
