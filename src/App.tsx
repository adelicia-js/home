import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { GlobalStyle, AppRoot } from "./styles/globalStyles";
import SceneMachine from "./components/SceneMachine";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppRoot>
        <SceneMachine />
      </AppRoot>
    </ThemeProvider>
  );
}
