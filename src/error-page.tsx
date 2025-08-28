import styled, { ThemeProvider } from "styled-components";
import { useRouteError } from "react-router-dom";
import CottageRoundedIcon from "@mui/icons-material/CottageRounded";
import { theme } from "./styles/theme";
import { GlobalStyle } from "./styles/globalStyles";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ErrorPageContainer id="error-page">
        <ErrorContainer>
          <ErrorTitle className="animated">OOPS!</ErrorTitle>
          <ErrorSubtitle className="animated">
            This page does not exist.
          </ErrorSubtitle>
        </ErrorContainer>
        <HomeLink href="/">
          <CottageRoundedIcon sx={{ fontSize: 40 }} />
        </HomeLink>
      </ErrorPageContainer>
    </ThemeProvider>
  );
}

const ErrorPageContainer = styled.div`
  min-height: 100vh;
  background: ${(props) => props.theme?.gradients?.cyan || 'linear-gradient(rgb(253, 224, 71), rgb(16, 185, 129), rgb(8, 145, 178))'};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
`;

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ErrorTitle = styled.h1`
  background-image: ${(props) => props.theme?.gradients?.animated || 'linear-gradient(-210deg, #17ac07 0%, #04cb7b 40%, #8c58b0 60%, #04cb7b 80%, #17ac07 100%)'};
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 5s ease infinite;
  display: inline-block;
  font-size: 3.75rem;
  font-weight: bold;
  padding-bottom: 0.2rem;
`;

const ErrorSubtitle = styled.h2`
  background-image: ${(props) => props.theme?.gradients?.animated || 'linear-gradient(-210deg, #17ac07 0%, #04cb7b 40%, #8c58b0 60%, #04cb7b 80%, #17ac07 100%)'};
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 5s ease infinite;
  display: inline-block;
  font-size: 1rem;
  font-weight: 300;
`;

const HomeLink = styled.a`
  font-size: 1.875rem;
  color: ${(props) => props.theme?.colors?.emerald?.[900] || '#064e3b'};
  transition: color 0.3s ease;

  &:hover {
    color: #1cab91;
    text-shadow: 1px 0.1px 15px #99e2f6;
  }
`;
