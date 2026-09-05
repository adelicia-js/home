import { useCallback, useState } from "react";
import { EnvironmentId, SceneId } from "../types/scene";

// The experience's only piece of app state and its transitions:
// landing -> galaxy -> environment, and back. SceneMachine renders whatever
// `scene` this returns.
export function useSceneMachine() {
  const [scene, setScene] = useState<SceneId>("landing");

  const enterGalaxy = useCallback(() => setScene("galaxy"), []);
  const enterEnvironment = useCallback((id: EnvironmentId) => setScene(id), []);
  const backToLanding = useCallback(() => setScene("landing"), []);

  return { scene, enterGalaxy, enterEnvironment, backToLanding };
}
