import styled, { ThemeProvider } from 'styled-components';
import CottageRoundedIcon from "@mui/icons-material/CottageRounded";
import { theme } from '../styles/theme';
import { GlobalStyle } from '../styles/globalStyles';

export default function AboutMe() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AboutContainer className="animated-background">
        <MainTitle>Hi! I&apos;m Ady. :) </MainTitle>
        <SubTitle>A graduate student from Bengaluru, India.</SubTitle>
        <SubTitleWithMargin>Also a frontend web developer, artist & cat enthusiast.</SubTitleWithMargin>
        <WorkInProgress>[This page is currently still being worked on.]</WorkInProgress>
        <HomeLink href="/">
          <CottageRoundedIcon sx={{ fontSize: 40 }} />
        </HomeLink>
      </AboutContainer>
    </ThemeProvider>
  );
}

const AboutContainer = styled.div`
  color: ${props => props.theme.colors.fuchsia[200]};
  padding: 0 1rem;
  text-align: center;
  min-height: 100vh;
  background: ${props => props.theme.gradients.cyan};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MainTitle = styled.h1`
  font-size: 1.875rem;
  font-weight: bold;
  padding-bottom: 1rem;
`;

const SubTitle = styled.h2`
  font-size: 1rem;
  padding-bottom: 0.25rem;
  
  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    font-size: 1rem;
  }
`;

const SubTitleWithMargin = styled(SubTitle)`
  padding-bottom: 1rem;
`;

const WorkInProgress = styled.h3`
  font-size: 0.75rem;
  padding-bottom: 1rem;
`;

const HomeLink = styled.a`
  font-size: 1.875rem;
  color: ${props => props.theme.colors.fuchsia[900]};
  transition: color 0.3s ease;
  
  &:hover {
    color: ${props => props.theme.colors.fuchsia[200]};
  }
`;

