import styled from "styled-components";

// --- Shared palette for the /play world (sea + door + galaxy) ---
export const play = {
  teal: "#159fb0",
  tealDeep: "#0d7c8a",
  gold: "#e6b84c",
  goldSoft: "#f4e7c1",
  red: "#e23b4e",
  redDeep: "#c22a3c",
  redDark: "#9a1e2e",
  night: "#070a18",
  navy: "#0b1e46",
  cream: "#f3e2b8",
  mint: "#7ef0d0",
};

// Top-level wrapper for the whole experience.
export const PlayRoot = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  height: 100dvh;
  overflow: hidden;
  background: ${play.night};
`;

// Full-bleed layer used by every scene; scenes stack their content on top.
export const SceneLayer = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
`;

// Circular glass icon button for scene navigation (back-to-door, back-to-galaxy).
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
  color: ${play.goldSoft};
  background: rgba(10, 14, 30, 0.55);
  border: 2px solid ${play.gold};
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
