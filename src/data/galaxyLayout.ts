import { PlanetPlacement } from "../types/scene";

// Extracted art (public/planets + public/objects) scattered across the stage.
// id -> section mapping is easily swapped here.
export const PLANETS: PlanetPlacement[] = [
  { id: "about", label: "About", src: "/objects/astronaut.png", xPct: 19, yPct: 53, sizeVmin: 9, glow: "#cfe6ff", aspect: 0.604, float: true },
  { id: "projects", label: "Projects", src: "/planets/planet-2.png", xPct: 48, yPct: 27, sizeVmin: 30, glow: "#9aa0e6" },
  { id: "resume", label: "Resume", src: "/planets/planet-1.png", xPct: 37, yPct: 80, sizeVmin: 25, glow: "#7fe0b0" },
  { id: "contact", label: "Contact", src: "/objects/rocket.png", xPct: 68, yPct: 72, sizeVmin: 16, glow: "#ffd08a", aspect: 0.907, float: true },
  { id: "hobbies", label: "Hobbies", src: "/planets/planet-3.png", xPct: 82, yPct: 37, sizeVmin: 14, glow: "#b48fe0" },
];
