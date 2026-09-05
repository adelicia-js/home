import { keyframes } from "styled-components";

// Gentle bob for the floating characters (astronaut, rocket). Shared by the
// landing astronaut and the galaxy planet-objects so both drift identically.
export const floatBob = keyframes`
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-7%) rotate(-2deg); }
`;
