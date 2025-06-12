import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
      };
      emerald: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
      };
      cyan: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
      };
      yellow: {
        300: string;
        400: string;
      };
      teal: {
        200: string;
        400: string;
        500: string;
      };
      fuchsia: {
        200: string;
        900: string;
      };
      white: string;
      black: string;
    };
    gradients: {
      primary: string;
      teal: string;
      cyan: string;
      animated: string;
      animatedBackground: string;
    };
    fonts: {
      primary: string;
      mono: string;
      secondary: string;
    };
    breakpoints: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    shadows: {
      text: string;
      textSea: string;
      box: string;
      boxMd: string;
      boxLg: string;
    };
    animations: {
      textclip: string;
      jump: string;
      pulse: string;
      groovy: string;
      who: string;
    };
  }
}