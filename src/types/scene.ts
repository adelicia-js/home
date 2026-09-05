// Scene state machine identifiers + galaxy layout types for the experience.

// Single source of truth for the navigable environments. The union type and the
// runtime guard both derive from this, so adding one means editing only here.
export const ENVIRONMENT_IDS = [
  "about",
  "projects",
  "resume",
  "contact",
  "hobbies",
] as const;

export type EnvironmentId = (typeof ENVIRONMENT_IDS)[number];
export type SceneId = "landing" | "galaxy" | EnvironmentId;

export const isEnvironment = (scene: SceneId): scene is EnvironmentId =>
  (ENVIRONMENT_IDS as readonly string[]).includes(scene);

// Config for a navigable object ("planet") in the galaxy scene.
export interface PlanetPlacement {
  id: EnvironmentId;
  label: string;
  src: string;
  // Centre position as % of the stage, and width in vmin.
  xPct: number;
  yPct: number;
  sizeVmin: number;
  // Reserved per-object glow colour (kept for an upcoming per-planet glow).
  glow: string;
  // Width / height of the art, so non-square objects (astronaut, rocket) get a
  // tight button. Defaults to 1 (planets are ~square).
  aspect?: number;
  // Characters (astronaut, rocket) gently bob; planets stay still.
  float?: boolean;
}
