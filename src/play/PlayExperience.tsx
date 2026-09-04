import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import { GlobalStyle } from "../styles/globalStyles";
import SceneMachine from "./sceneMachine";
import { PlayRoot } from "./styles/playStyles";

export default function PlayExperience() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <PlayRoot>
        <SceneMachine />
      </PlayRoot>
    </ThemeProvider>
  );
}
