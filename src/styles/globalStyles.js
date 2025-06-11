import styled, { createGlobalStyle, keyframes } from "styled-components";

export const textclip = keyframes`
  to {
    background-position: 200% top;
  }
`;

export const jump = keyframes`
  0%, 100% {
    transform: translateX(-50%) translateY(0);
  }
  50% {
    transform: translateX(-50%) translateY(-20px);
  }
`;

export const pulse = keyframes`
  0% { scale: 100%; }
  50% { scale: 105%; }
  100% { scale: 100%; }
`;

export const groovy = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 50% 0%; }
  100% { background-position: 0% 50%; }
`;

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: ${(props) => props.theme.fonts.primary};
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${(props) => props.theme.fonts.primary};
  }

  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  #root, #__next {
    height: 100%;
  }

  .animated {
    background-image: ${(props) => props.theme.gradients.animated};
    background-size: 200% auto;
    color: #fff;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: ${textclip} 5s ease infinite;
    display: inline-block;
    text-shadow: rgba(25, 61, 2, 0.28) 1px 1px 5px;
  }

  .scroll-down {
    transform: translateX(-50%);
    animation: ${jump} 1.7s infinite;
  }

  .beat {
    animation: ${pulse} 7s linear infinite;
  }

  .animated-background {
    background-image: ${(props) => props.theme.gradients.animatedBackground};
    background-size: 200% auto;
    animation: ${groovy} 30s ease-in-out infinite;
    text-shadow: 1px 0.1px 3px #07463a4c;
  }

  .icons :visited {
    color: #085c5c;
  }

  .icons :hover {
    color: #1cab91;
    text-shadow: 1px 0.1px 15px #99e2f6;
  }

  .pdf-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .pdf-controls {
    margin-bottom: 1rem;
  }

  .pdf-controls button {
    margin: 0 0.5rem;
  }

  .pdf-content {
    max-width: 100%;
    overflow-x: auto;
  }
`;

export const Container = styled.div`
  min-height: 100vh;
  text-align: center;
`;

export const GradientContainer = styled(Container)`
  background: ${(props) => props.gradient || props.theme.gradients.primary};
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justify || "center"};
  align-items: ${(props) => props.align || "center"};
  gap: ${(props) => props.gap || "1rem"};
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.columns || "repeat(3, 1fr)"};
  grid-template-rows: ${(props) => props.rows || "auto"};
  gap: ${(props) => props.gap || "1rem"};
  align-items: ${(props) => props.align || "center"};
  justify-content: ${(props) => props.justify || "center"};
`;

export const AnimatedText = styled.h1`
  background-image: ${(props) => props.theme.gradients.animated};
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${textclip} 5s ease infinite;
  display: inline-block;
  text-shadow: ${(props) => props.theme.shadows.text};
  font-weight: bold;
  padding-bottom: 0.5rem;
  font-size: ${(props) => props.size || "2rem"};

  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    font-size: ${(props) => props.smSize || "2.5rem"};
  }

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: ${(props) => props.mdSize || "3rem"};
  }

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    font-size: ${(props) => props.lgSize || "3.75rem"};
  }
`;
