import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    emerald: {
      900: '#064e3b',
    },
  },
  gradients: {
    cyan: 'linear-gradient(to bottom, #67e8f9, #a5f3fc, #22d3ee)',
    animated: `linear-gradient(
      -210deg,
      #17ac07 0%,
      #04cb7b 40%,
      #8c58b0 60%,
      #04cb7b 80%,
      #17ac07 100%
    )`,
  },
  fonts: {
    // App-wide base font. Anything unstyled inherits this.
    primary: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
    // Pixel font for the game dialogue / retro accents.
    pixel: '"Silkscreen", "SFMono-Regular", Menlo, Consolas, monospace',
  },
  // Space-world palette for the play experience (landing, galaxy, environments).
  play: {
    teal: '#159fb0',
    tealDeep: '#0d7c8a',
    gold: '#e6b84c',
    goldSoft: '#f4e7c1',
    red: '#e23b4e',
    redDeep: '#c22a3c',
    redDark: '#9a1e2e',
    night: '#070a18',
    navy: '#0b1e46',
    cream: '#f3e2b8',
    mint: '#7ef0d0',
  },
};
