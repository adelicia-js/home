import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      emerald: {
        900: string;
      };
    };
    gradients: {
      cyan: string;
      animated: string;
    };
    fonts: {
      primary: string;
      pixel: string;
    };
    play: {
      teal: string;
      tealDeep: string;
      gold: string;
      goldSoft: string;
      red: string;
      redDeep: string;
      redDark: string;
      night: string;
      navy: string;
      cream: string;
      mint: string;
    };
  }
}
