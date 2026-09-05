import styled, { keyframes } from "styled-components";

// Seamless tiling starfield that drifts in one direction like a river. Three
// layers of different tile sizes drift different distances per loop = parallax.
// Each layer shifts by exactly its tile size, so the loop is seamless.
// Each layer shifts by a whole multiple of its own tile (2 across, 1 down) so
// the loop is seamless; bigger tiles travel farther = parallax.
const riverDrift = keyframes`
  from { background-position: 0 0, 0 0, 0 0, 0 0, 0 0; }
  to {
    background-position:
      440px 220px,
      600px 300px,
      600px 300px,
      800px 400px,
      800px 400px;
  }
`;

const Starfield2D = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-image:
    radial-gradient(1px 1px at 40px 60px, rgba(255, 255, 255, 0.9), transparent),
    radial-gradient(1px 1px at 130px 20px, rgba(207, 239, 255, 0.8), transparent),
    radial-gradient(2px 2px at 90px 160px, rgba(255, 255, 255, 0.95), transparent),
    radial-gradient(1px 1px at 200px 120px, rgba(246, 226, 160, 0.7), transparent),
    radial-gradient(1.5px 1.5px at 260px 220px, rgba(255, 255, 255, 0.85), transparent);
  background-size: 220px 220px, 300px 300px, 300px 300px, 400px 400px, 400px 400px;
  animation: ${riverDrift} 90s linear infinite;
`;

export default Starfield2D;
