import styled, {
  createGlobalStyle,
  keyframes,
  DefaultTheme,
} from "styled-components";

export const textclip = keyframes`
  to {
    background-position: 200% top;
  }
`;

export const GlobalStyle = createGlobalStyle<{ theme?: DefaultTheme }>`
  * {
    font-family: ${(props) =>
      props.theme?.fonts.primary || '"Inter", sans-serif'};
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${(props) =>
      props.theme?.fonts.primary || '"Inter", sans-serif'};
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
    background-image: ${(props) =>
      props.theme?.gradients.animated ||
      "linear-gradient(-210deg, #17ac07 0%, #04cb7b 40%, #8c58b0 60%, #04cb7b 80%, #17ac07 100%)"};
    background-size: 200% auto;
    color: #fff;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: ${textclip} 5s ease infinite;
    display: inline-block;
    text-shadow: rgba(25, 61, 2, 0.28) 1px 1px 5px;
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
    background: ${(props) =>
      props.theme?.gradients.animated ||
      "linear-gradient(-210deg, #17ac07 0%, #04cb7b 40%, #8c58b0 60%, #04cb7b 80%, #17ac07 100%)"};
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
    scrollbar-color: #9fd2ccc0 #134e4a8c;
  }
`;

// Top-level wrapper for the whole experience.
export const AppRoot = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  height: 100dvh;
  overflow: hidden;
  background: ${(props) => props.theme?.play.night || "#070a18"};
`;

// Circular glass icon button for scene navigation (back-to-landing, back-to-galaxy).
// Corner-anchored; override position via inline style/styled when needed.
export const IconNavButton = styled.button`
  position: absolute;
  top: 1.1rem;
  left: 1.1rem;
  z-index: 30;
  width: 46px;
  height: 46px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme?.play.goldSoft || "#f4e7c1"};
  background: rgba(10, 14, 30, 0.55);
  border: 2px solid ${(props) => props.theme?.play.gold || "#e6b84c"};
  border-radius: 50%;
  cursor: pointer;
  backdrop-filter: blur(4px);
  transition: transform 0.15s ease, background 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    background: rgba(20, 26, 48, 0.82);
    transform: translateY(-1px);
    box-shadow: 0 0 16px rgba(230, 184, 76, 0.45);
  }
`;
