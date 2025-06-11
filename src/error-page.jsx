import styled, { ThemeProvider } from 'styled-components';
import { useRouteError } from "react-router-dom";
import CottageRoundedIcon from "@mui/icons-material/CottageRounded";
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/globalStyles';

const ErrorContainer = styled.div`
  min-height: 100vh;
  background: ${props => props.theme.gradients.cyan};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ErrorTitle = styled.h1`
  background-image: ${props => props.theme.gradients.animated};
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 5s ease infinite;
  display: inline-block;
  font-size: 3.75rem;
  font-weight: bold;
  padding-bottom: 0.5rem;
`;

const ErrorSubtitle = styled.h2`
  background-image: ${props => props.theme.gradients.animated};
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 5s ease infinite;
  display: inline-block;
  font-size: 1rem;
`;

const HomeLink = styled.a`
  font-size: 1.875rem;
  color: ${props => props.theme.colors.emerald[900]};
  transition: color 0.3s ease;
  
  &:hover {
    color: #1cab91;
    text-shadow: 1px 0.1px 15px #99e2f6;
  }
`;

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ErrorContainer id="error-page">
        <ErrorTitle className="animated">OOPS!</ErrorTitle>
        <ErrorSubtitle className="animated">Page does not exist.</ErrorSubtitle>
        <HomeLink href="/">
          <CottageRoundedIcon sx={{ fontSize: 40 }} />
        </HomeLink>
      </ErrorContainer>
    </ThemeProvider>
  );
}