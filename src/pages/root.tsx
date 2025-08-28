import styled, { ThemeProvider } from "styled-components";
import {
  GitHub,
  LinkedIn,
  KeyboardDoubleArrowDownRounded,
  ArrowUpwardRounded,
  AlternateEmailRounded
} from "@mui/icons-material";
import { theme } from "../styles/theme";
import { GlobalStyle, GradientContainer } from "../styles/globalStyles";

interface SocialLinkProps {
  hoverColor?: string;
}

interface MenuLinkProps {
  row: number;
}

export default function Root() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <GradientContainer id="home">
        <HeaderSection id="header">
          <ProfileSection>
            <WelcomeText className="animated">
              Hi, I&apos;m Adelicia.
            </WelcomeText>
            <div id="profile-description">
              <TechStack>
                React | Next.js | Vite | Node.js | Figma 
                <HiddenOnMobile>| Vercel</HiddenOnMobile>
              </TechStack>
              <SocialsList>
                <SocialsWrapper>
                  <SocialLink
                    href="https://www.github.com/adelicia-js"
                    target="_blank"
                    rel="noreferrer"
                    hoverColor={theme.colors.white}
                  >
                    <GitHub sx={{ fontSize: 37 }} />
                  </SocialLink>
                  <SocialLink
                    href="https://www.linkedin.com/in/adelicia"
                    target="_blank"
                    rel="noreferrer"
                    hoverColor="#1976d2"
                  >
                    <LinkedIn sx={{ fontSize: 40 }} />
                  </SocialLink>
                  <SocialLink
                    href="mailto:a.seq@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    hoverColor="#d32f2f"
                  >
                    <AlternateEmailRounded sx={{ fontSize: 39 }} />
                  </SocialLink>
                </SocialsWrapper>
              </SocialsList>
            </div>
          </ProfileSection>
          <ScrollSection>
            <ScrollDownLink href="#menu">
              <KeyboardDoubleArrowDownRounded
                sx={{ fontSize: 50 }}
                className="scroll-down"
              />
            </ScrollDownLink>
          </ScrollSection>
        </HeaderSection>

        <MainMenu id="menu">
          <MenuLink row={1}>
            <a href="/me">About Me</a>
          </MenuLink>
          <MenuLink row={2}>
            <a href="/projects">My Projects</a>
          </MenuLink>
          <MenuLink row={3}>
            <a href="./ady-resume.pdf" target="_blank">
              My Resume
            </a>
          </MenuLink>
          <FooterSection>
            <ScrollUpLink href="#home">
              <ArrowUpwardRounded
                sx={{ fontSize: 45 }}
                className="scroll-down"
              />
            </ScrollUpLink>
            <div>
              <ThankYouText>
                <span className="emoji">🧜🏽‍♀️</span>
                <span> Thank you for visiting </span>
                <span className="emoji">🌴</span>
              </ThankYouText>
              <SourceLink
                href="https://github.com/adelicia-js/home"
                target="_blank"
                rel="noreferrer"
              >
                <span className="tracking-wide">$source</span>
                {" "}|{" "} 
                <span className="highlight">2025 - 2026</span>
              </SourceLink>
            </div>
          </FooterSection>
        </MainMenu>
      </GradientContainer>
    </ThemeProvider>
  );
}

// Header section - full screen height, centered content
const HeaderSection = styled.header`
  min-height: 100vh;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme?.colors?.black || '#000000'};
`;

// Profile content section - middle of header
const ProfileSection = styled.section`
  grid-row-start: 2;
`;

// Welcome text with animated gradient
const WelcomeText = styled.h1`
  font-weight: bold;
  padding-bottom: 0.5rem;

  font-size: 1.875rem;
  @media (min-width: ${(props) => props.theme?.breakpoints?.sm || '640px'}) {
    font-size: 2.25rem;
  }
  @media (min-width: ${(props) => props.theme?.breakpoints?.md || '768px'}) {
    font-size: 3rem;
  }
  @media (min-width: ${(props) => props.theme?.breakpoints?.lg || '1024px'}) {
    font-size: 3.75rem;
  }
`;

// Tech stack text
const TechStack = styled.h2`
  text-align: center;
  text-shadow: ${(props) => props.theme?.shadows?.textSea || '1px 0.1px 1px #258989'};
  letter-spacing: 0.05em;
  font-weight: normal;
  font-family: ${(props) => props.theme?.fonts?.mono || '"Unbounded", sans-serif'};
  color: ${(props) => props.theme?.colors?.emerald?.[800] || '#065f46'};
  padding-bottom: 1rem;

  font-size: 0.75rem;
  @media (min-width: ${(props) => props.theme?.breakpoints?.sm || '640px'}) {
    font-size: 0.75rem;
  }
  @media (min-width: ${(props) => props.theme?.breakpoints?.md || '768px'}) {
    font-size: 0.875rem;
  }
  @media (min-width: ${(props) => props.theme?.breakpoints?.lg || '1024px'}) {
    font-size: 0.9rem;
  }
  @media (max-width: 400px) {
    font-size: 0.65rem;
  }
  @media (max-width: 370px) {
    font-size: 0.6rem;
  }
  @media (max-width: 300px) {
    font-size: 0.55rem;
  }
`;

const HiddenOnMobile = styled.span`
  display: none;
  @media (min-width: ${(props) => props.theme?.breakpoints?.sm || '640px'}) {
    display: inline;
    text-align: center;
    text-shadow: ${(props) => props.theme?.shadows?.textSea || '1px 0.1px 1px #258989'};
    letter-spacing: 0.05em;
    font-weight: normal;
    font-family: ${(props) => props.theme?.fonts?.mono || '"Unbounded", sans-serif'};
    color: ${(props) => props.theme?.colors?.emerald?.[800] || '#065f46'};
    padding-bottom: 1rem;
  }
`;

// Social links container
const SocialsList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${(props) => props.theme?.colors?.emerald?.[800] || '#065f46'};
`;

const SocialsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1.25rem;
`;

const SocialLink = styled.a<SocialLinkProps>`
  color: inherit;
  transition: all 0.3s ease;

  .MuiSvgIcon-root {
    transition: all 0.3s ease;
  }

  &:hover {
    transform: scale(1.1);

    @media (min-width: 500px) {
      transform: scale(1.15);
    }

    .MuiSvgIcon-root {
      color: ${(props) => props.hoverColor || props.theme?.colors?.white || '#ffffff'};
      filter: drop-shadow(2px 2px 4px rgba(222, 240, 237, 0.3));
    }
  }
`;

// Scroll down section - bottom of header
const ScrollSection = styled.section`
  grid-row-start: 3;
  position: relative;
  height: 100%;
`;

const ScrollDownLink = styled.a`
  color: ${(props) => props.theme?.colors?.emerald?.[800] || '#065f46'};

  .MuiSvgIcon-root {
    position: absolute;
    top: 0%;
    left: 50%;
    transform: translateX(-50%);
  }
`;

// Main menu section - full screen height
const MainMenu = styled.main`
  text-align: center;
  padding-top: 1rem;
  min-height: 100vh;
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  align-items: center;
  justify-content: space-around;
  color: ${(props) => props.theme?.colors?.black || '#000000'};
  font-size: 1rem;

  @media (min-width: ${(props) => props.theme?.breakpoints?.sm || '640px'}) {
    font-size: 1.5rem;
  }
`;

const MenuLink = styled.div<MenuLinkProps>`
  text-shadow: ${(props) => props.theme?.shadows?.textSea || '1px 0.1px 1px #258989'};
  text-transform: uppercase;
  color: ${(props) => props.theme?.colors?.emerald?.[900] || '#064e3b'};
  transition: all 0.3s ease;

  a {
    color: inherit;
    text-decoration: none;
  }

  &:hover {
    color: ${(props) => props.theme?.colors?.emerald?.[200] || '#a7f3d0'};
    font-weight: 600;

    @media (min-width: ${(props) => props.theme?.breakpoints?.sm || '640px'}) {
      letter-spacing: 0.08rem;
    }

    @media (min-width: 500px) {
      a {
        text-decoration: underline;
        text-underline-offset: 10px;
        text-decoration-thickness: 2px;
      }
    }
  }

  grid-row-start: ${(props) => props.row};
`;

const FooterSection = styled.div`
  color: ${(props) => props.theme?.colors?.emerald?.[900] || '#064e3b'};
  grid-row-start: 4;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  align-items: center;
`;

const ScrollUpLink = styled.a`
  color: ${(props) => props.theme?.colors?.emerald?.[900] || '#064e3b'};

  .MuiSvgIcon-root {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const ThankYouText = styled.p`
  font-style: italic;
  text-transform: uppercase;
  padding-bottom: 0.25rem;
  font-size: 1rem;

  @media (min-width: ${(props) => props.theme?.breakpoints?.sm || '640px'}) {
    font-size: 1.125rem;
    padding-bottom: 0.5rem;
  }

  @media (min-width: ${(props) => props.theme?.breakpoints?.md || '768px'}) {
    font-size: 1.25rem;
  }

  .emoji {
    font-style: normal;
    font-size: 1.125rem;

    @media (min-width: ${(props) => props.theme?.breakpoints?.sm || '640px'}) {
      font-size: 1.25rem;
    }

    @media (min-width: ${(props) => props.theme?.breakpoints?.md || '768px'}) {
      font-size: 1.5rem;
    }
  }
`;

const SourceLink = styled.a`
  text-shadow: ${(props) => props.theme?.shadows?.textSea || '1px 0.1px 1px #258989'};
  color: ${(props) => props.theme?.colors?.emerald?.[300] || '#6ee7b7'};
  font-weight: 400;
  transition: all 0.3s ease;
  text-decoration: none;
  font-size: 0.875rem;

  @media (min-width: ${(props) => props.theme?.breakpoints?.sm || '640px'}) {
    font-size: 1rem;
  }

  @media (min-width: ${(props) => props.theme?.breakpoints?.md || '768px'}) {
    font-size: 1.125rem;
  }

  &:hover {
    @media (min-width: ${(props) => props.theme?.breakpoints?.sm || '640px'}) {
      letter-spacing: 0.06rem;
    }
  }

  .tracking-wide {
    letter-spacing: 0.05em;
  }
`;
