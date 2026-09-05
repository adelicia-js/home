import styled, { keyframes } from "styled-components";

// A vibrant, colourful drift. Seeded by the old shadergradient palette
// (blue #00008b -> purple #551a82 -> teal #4ca2b5) but pushed richer with indigo,
// magenta and cyan. The animation ping-pongs (alternate) so it eases start -> end
// -> start with no abrupt loop jump; the angle sets the flow direction.
const drift = keyframes`
  from { background-position: 0% 50%; }
  to { background-position: 100% 50%; }
`;

const CssGradient = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    120deg,
    #000007 0%,
    #1b0357 12%,
    #4c1a82 24%,
    #024aa1 50%,
    #03a091 60%,
    #0e6578 68%,
    #40064a 78%,
    #550691 88%,
    #000026 100%
  );
  background-size: 260% 100%;
  animation: ${drift} 42s ease-in-out infinite alternate;
`;

export default CssGradient;
