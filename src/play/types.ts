// Scene state machine identifiers for the /play experience.
export type EnvironmentId = "about" | "projects" | "resume" | "contact" | "hobbies";
export type SceneId = "landing" | "galaxy" | EnvironmentId;

// Config for a navigable "planet" in the galaxy scene.
export interface PlanetConfig {
  id: EnvironmentId;
  label: string;
  // 3D position in the galaxy canvas.
  position: [number, number, number];
  // Core colour + outer glow colour of the planet.
  color: string;
  glow: string;
}
