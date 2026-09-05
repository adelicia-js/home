import styled, { keyframes } from "styled-components";

// Adelicia's designed star clutter (public/space-clutter.svg, transparent) tiled
// as a repeating background and drifting in one calm river direction. The tile
// repeats, and we shift by whole multiples of the tile size, so the loop is
// seamless. Sits over the gradient, under the planets.
const drift = keyframes`
  from { background-position: 0 0; }
  to { background-position: 4500px 945px; }
`;

const SpaceClutter = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: url("/space-clutter.svg") repeat;
  background-size: 1500px 945px;
  opacity: 0.95;
  animation: ${drift} 300s linear infinite;
`;

export default SpaceClutter;
