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


export const HomeLink = styled.a`
  text-decoration: none;
  position: absolute;
  bottom: 3%;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1.25rem;
  background: linear-gradient(
    135deg,
    rgba(16, 185, 129, 0.15) 0%,
    rgba(59, 130, 246, 0.15) 50%,
    rgba(139, 69, 19, 0.15) 100%
  );
  backdrop-filter: blur(15px) saturate(150%);
  -webkit-backdrop-filter: blur(15px) saturate(150%);
  border: 1.5px solid rgba(255, 255, 255, 0.2);
  border-radius: 1.5rem;
  color: rgba(255, 255, 255, 0.9);
  font-family: ${(props) => props.theme?.fonts?.secondary || '"Inter", sans-serif'};
  font-weight: 500;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 1.5rem;
    padding: 1.5px;
    background: linear-gradient(
      135deg,
      rgba(16, 185, 129, 0.5),
      rgba(59, 130, 246, 0.5),
      rgba(139, 69, 19, 0.5)
    );
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: xor;
    -webkit-mask-composite: xor;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-2px) scale(1.03);
    color: rgba(255, 255, 255, 1);
    box-shadow: 
      0 15px 30px rgba(16, 185, 129, 0.2),
      0 8px 15px rgba(59, 130, 246, 0.15),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);
    
    &::after {
      opacity: 1;
    }
  }

  &:active {
    transform: translateY(-1px) scale(1.01);
  }
`;

export const HomeLinkIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05));
  transition: all 0.3s ease;
  
  ${HomeLink}:hover & {
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.1));
  }
`;

export const HomeLinkText = styled.span`
  font-family: ${(props) => props.theme?.fonts?.secondary || '"Inter", sans-serif'};
  font-size: 0.95rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  background: linear-gradient(
    135deg,
    #10b981,
    #3b82f6,
    #8b4513
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  transition: all 0.3s ease;
  
  ${HomeLink}:hover & {
    background: linear-gradient(
      135deg,
      #34d399,
      #60a5fa,
      #a0522d
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

export const HomeLinkGradientIcon = styled.div`
  display: inline-block;
  background: linear-gradient(
    135deg,
    #10b981,
    #3b82f6,
    #8b4513
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  transition: all 0.3s ease;
  
  ${HomeLink}:hover & {
    background: linear-gradient(
      135deg,
      #34d399,
      #60a5fa,
      #a0522d
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  svg {
    display: block;
  }
`;
