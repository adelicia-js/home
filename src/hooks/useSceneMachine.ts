import { useCallback, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { EnvironmentId, SceneId, isEnvironment } from "../types/scene";

// The galaxy hub lives here; planet pages nest under it (/explore/:planet).
const GALAXY_PATH = "/explore";

function sceneFromPath(pathname: string): SceneId {
  if (pathname === GALAXY_PATH) return "galaxy";
  const match = pathname.match(/^\/explore\/([^/]+)/);
  if (match) return isEnvironment(match[1]) ? match[1] : "galaxy";
  return "landing";
}

// The experience's scene is derived from the URL (single source of truth), and
// its transitions are navigations: landing (/) -> galaxy (/explore) ->
// environment (/explore/:planet), and back. SceneMachine renders `scene`.
export function useSceneMachine() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const scene = sceneFromPath(pathname);

  // Correct a bad planet slug (e.g. /explore/foo) back to the galaxy.
  useEffect(() => {
    const match = pathname.match(/^\/explore\/([^/]+)/);
    if (match && !isEnvironment(match[1])) {
      navigate(GALAXY_PATH, { replace: true });
    }
  }, [pathname, navigate]);

  const enterGalaxy = useCallback(() => navigate(GALAXY_PATH), [navigate]);
  const enterEnvironment = useCallback(
    (id: EnvironmentId) => navigate(`${GALAXY_PATH}/${id}`),
    [navigate]
  );
  const backToLanding = useCallback(() => navigate("/"), [navigate]);

  return { scene, enterGalaxy, enterEnvironment, backToLanding };
}
