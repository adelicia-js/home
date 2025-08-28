import styled, { createGlobalStyle, keyframes, DefaultTheme } from "styled-components";

interface GradientContainerProps {
  gradient?: string;
}

interface FlexContainerProps {
  direction?: string;
  justify?: string;
  align?: string;
  gap?: string;
}

interface GridContainerProps {
  columns?: string;
  rows?: string;
  gap?: string;
  align?: string;
  justify?: string;
}

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

export const subtleFloat = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
`;

export const slideInFromBottom = keyframes`
  0% {
    opacity: 0;
    transform: translateY(100vh);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const zoomInFromCenter = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.3);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

export const GlobalStyle = createGlobalStyle<{ theme?: DefaultTheme }>`
  * {
    font-family: ${(props) => props.theme?.fonts.primary || '"Unbounded", sans-serif'};
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${(props) => props.theme?.fonts.primary || '"Unbounded", sans-serif'};
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
    background-image: ${(props) => props.theme?.gradients.animated || 'linear-gradient(-210deg, #17ac07 0%, #04cb7b 40%, #8c58b0 60%, #04cb7b 80%, #17ac07 100%)'};
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
    background-image: ${(props) => props.theme?.gradients.animatedBackground || 'linear-gradient(-90deg, #6170f8c9, #1026f0c9, #581fdec2, #8f65f0d0, #c265f0d0, #eb65f0c9, #ff88f9a4)'};
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

  /* Custom Scrollbar */
  ::-webkit-scrollbar {
    width: 12px;
    height: 12px;
  }

  ::-webkit-scrollbar-track {
    background: linear-gradient(180deg, #164e634c, #134e4a);
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme?.gradients.animated || 'linear-gradient(-210deg, #17ac07 0%, #04cb7b 40%, #8c58b0 60%, #04cb7b 80%, #17ac07 100%)'};
    border-radius: 10px;
    border: 2px solid transparent;
    background-clip: padding-box;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(
      -210deg,
      #22ac07 0%,
      #06cb7b 40%,
      #9c58b0 60%,
      #06cb7b 80%,
      #22ac07 100%
    );
    background-clip: padding-box;
  }

  ::-webkit-scrollbar-corner {
    background: linear-gradient(180deg, #164e63, #134e4a);
  }

  /* Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: #14b8a6 #134e4a;
  }
`;

export const Container = styled.div`
  min-height: 100vh;
  text-align: center;
`;

export const GradientContainer = styled(Container)<GradientContainerProps>`
  background: ${(props) => props.gradient || props.theme?.gradients.primary || 'linear-gradient(rgb(253, 224, 71), rgb(16, 185, 129), rgb(8, 145, 178))'};
`;

export const FlexContainer = styled.div<FlexContainerProps>`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justify || "center"};
  align-items: ${(props) => props.align || "center"};
  gap: ${(props) => props.gap || "1rem"};
`;

export const GridContainer = styled.div<GridContainerProps>`
  display: grid;
  grid-template-columns: ${(props) => props.columns || "repeat(3, 1fr)"};
  grid-template-rows: ${(props) => props.rows || "auto"};
  gap: ${(props) => props.gap || "1rem"};
  align-items: ${(props) => props.align || "center"};
  justify-content: ${(props) => props.justify || "center"};
`;

export const GlassBox = styled.div`
  background: linear-gradient(
    -120deg,
    rgba(0, 0, 0, 0.1) 0%,
    rgba(0, 0, 0, 0.15) 50%,
    rgba(0, 0, 0, 0.1) 100%
  );
  backdrop-filter: blur(10px) saturate(120%);
  -webkit-backdrop-filter: blur(10px) saturate(120%);
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.1), inset 0 -1px 0 rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
  padding: 1.5rem;
  display: flex;
`;