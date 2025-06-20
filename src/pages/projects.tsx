import styled, { ThemeProvider } from 'styled-components';
import CottageRoundedIcon from "@mui/icons-material/CottageRounded";
import { useState } from "react";
import { theme } from '../styles/theme';
import { GlobalStyle, GradientContainer, GridContainer } from '../styles/globalStyles';

interface AnchorStates {
  [key: string]: boolean;
}

interface ProjectLinkProps {
  rowStart: number;
  colStart: number;
  lgRowStart?: number;
  lgColStart?: number;
}

interface ProjectDescriptionProps {
  rowStart: number;
  colStart: number;
}

interface MobileDescriptionProps {
  rowStart: number;
}

export default function Projects() {
  const [anchorStates, setAnchorStates] = useState<AnchorStates>({});

  const handleMouseEnter = (anchorKey: string) => {
    setAnchorStates((prevStates) => ({
      ...prevStates,
      [anchorKey]: true,
    }));
  };

  const handleMouseLeave = (anchorKey: string) => {
    setAnchorStates((prevStates) => ({
      ...prevStates,
      [anchorKey]: false,
    }));
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ProjectsContainer gradient={theme.gradients.teal} id="projects-wrapper">
        <ProjectListWrapper
          id="project-list-wrapper"
          columns="repeat(3, 1fr)"
          rows="repeat(11, auto)"
          gap="1.5rem"
        >
          {/* Syntaxia 2023's Website */}
          <ProjectLink
            id="syntaxia-link"
            href="https://syntaxia2023.web.app/"
            target="_blank"
            rel="noreferrer"
            rowStart={1}
            colStart={2}
            lgRowStart={1}
            lgColStart={2}
            onMouseEnter={() => handleMouseEnter("syntaxia")}
            onMouseLeave={() => handleMouseLeave("syntaxia")}
          >
            Syntaxia 2023
          </ProjectLink>
          
          {anchorStates.syntaxia && (
            <ProjectDescription
              id="syntaxia-description"
              rowStart={1}
              colStart={3}
            >
              <p>Official registration website for Syntaxia 2023.</p>
              <p>
                Built with
                <span className="bold">
                  HTML, CSS, JavaScript & Bootstrap
                </span>
                .
              </p>
              <p>
                Hosted with
                <span className="bold-simple">Firebase</span>.
              </p>
            </ProjectDescription>
          )}
          
          <MobileDescription rowStart={2}>
            <p>Official registration website for Syntaxia 2023.</p>
            <p>
              Built with
              <span className="bold">
                JavaScript, Bootstrap & Firebase
              </span>
              .
            </p>
          </MobileDescription>

          {/* Loyola Degree College's Website */}
          <ProjectLink
            id="loyola-link"
            href="https://loyola-website.vercel.app/"
            target="_blank"
            rel="noreferrer"
            rowStart={3}
            colStart={2}
            lgRowStart={2}
            lgColStart={2}
            onMouseEnter={() => handleMouseEnter("loyola")}
            onMouseLeave={() => handleMouseLeave("loyola")}
          >
            LDC College Website
          </ProjectLink>
          
          {anchorStates.loyola && (
            <ProjectDescription
              id="loyola-description"
              rowStart={2}
              colStart={3}
            >
              <p>Redesigned website for Loyola Degree College.</p>
              <p>
                Built with
                <span className="bold">
                  Next.js, React & Tailwind CSS
                </span>
                .
              </p>
              <p>
                Hosted with
                <span className="bold-simple">Vercel</span>.
              </p>
            </ProjectDescription>
          )}
          
          <MobileDescription rowStart={4}>
            <p>Redesigned website for Loyola Degree College.</p>
            <p>
              Built with
              <span className="bold">
                Next.js, Tailwind CSS & Vercel
              </span>
              .
            </p>
          </MobileDescription>

          {/* Simple To-Do Web App */}
          <ProjectLink
            id="todo-link"
            href="https://todo-cra.pages.dev/"
            target="_blank"
            rel="noreferrer"
            rowStart={5}
            colStart={2}
            lgRowStart={3}
            lgColStart={2}
            onMouseEnter={() => handleMouseEnter("todo")}
            onMouseLeave={() => handleMouseLeave("todo")}
          >
            To-do App
          </ProjectLink>
          
          {anchorStates.todo && (
            <ProjectDescription
              id="todo-description"
              rowStart={3}
              colStart={3}
            >
              <p>Simple To-Do app.</p>
              <p>
                Built with
                <span className="bold">
                  React & Tailwind CSS
                </span>
                .
              </p>
              <p>
                Hosted with
                <span className="bold-simple">
                  Cloudflare Pages
                </span>
                .
              </p>
            </ProjectDescription>
          )}
          
          <MobileDescription rowStart={6}>
            <p>Simple To-Do app.</p>
            <p>
              Built with
              <span className="bold">
                React, Tailwind CSS & CloudFlare
              </span>
              .
            </p>
          </MobileDescription>

          {/* Milestone Monitor*/}
          <ProjectLink
            id="milestone-monitor-link"
            href="https://milestone-monitor.vercel.app/"
            target="_blank"
            rel="noreferrer"
            rowStart={7}
            colStart={2}
            lgRowStart={4}
            lgColStart={2}
            onMouseEnter={() => handleMouseEnter("milestone")}
            onMouseLeave={() => handleMouseLeave("milestone")}
          >
            Milestone Monitor
          </ProjectLink>
          
          {anchorStates.milestone && (
            <ProjectDescription
              id="milestone-monitor-description"
              rowStart={4}
              colStart={3}
            >
              <p>A cataloguing app for university faculty.</p>
              <p>
                Built with
                <span className="bold">
                  Next.js, Supabase & Tailwind CSS
                </span>
                . Hosted with
                <span className="bold-simple">Vercel</span>.
              </p>
            </ProjectDescription>
          )}
          
          <MobileDescription rowStart={8}>
            <p>A cataloguing app for university faculty.</p>
            <p style={{ fontSize: '0.6rem' }}>
              Built with
              <span className="bold">
                Next.js, Supabase, Tailwind CSS & Vercel
              </span>.
            </p>
          </MobileDescription>
          
          {/* Back to Home */}
          <HomeIcon href="/">
            <CottageRoundedIcon sx={{ fontSize: 50 }} />
          </HomeIcon>
        </ProjectListWrapper>
      </ProjectsContainer>
    </ThemeProvider>
  );
}

const ProjectsContainer = styled(GradientContainer)`
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ProjectListWrapper = styled(GridContainer)`
  padding-top: 2rem;
  color: ${props => props.theme.colors.emerald[900]};
  text-transform: uppercase;
  justify-items: center;
  font-size: 1rem;
  
  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    font-size: 1.25rem;
  }
  
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    font-size: 1.5rem;
  }
  
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    padding-top: 0;
    gap: 3rem;
    grid-template-rows: repeat(7, auto);
  }
`;

const ProjectLink = styled.a<ProjectLinkProps>`
  box-shadow: ${props => props.theme.shadows.boxMd};
  border: 1px solid ${props => props.theme.colors.emerald[900]};
  border-bottom-width: 4px;
  border-radius: 2px 15px 2px 7px;
  padding: 1rem;
  width: 50vw;
  transition: all 0.3s ease;
  cursor: pointer;
  color: inherit;
  text-decoration: none;
  
  &:hover {
    background-color: ${props => props.theme.colors.teal[500]};
    box-shadow: ${props => props.theme.shadows.boxLg};
    letter-spacing: 0.05em;
    border-color: ${props => props.theme.colors.emerald[200]};
    color: ${props => props.theme.colors.emerald[200]};
    font-weight: bold;
  }
  
  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    padding: 2rem 1rem;
    height: 100%;
  }
  
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    width: 100%;
    height: fit-content;
    
    &:hover {
      background-color: transparent;
      border-color: ${props => props.theme.colors.emerald[700]};
      color: ${props => props.theme.colors.emerald[700]};
    }
  }
  
  grid-row-start: ${props => props.rowStart};
  grid-column-start: ${props => props.colStart};
  
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    grid-row-start: ${props => props.lgRowStart};
    grid-column-start: ${props => props.lgColStart};
  }
`;

const ProjectDescription = styled.div<ProjectDescriptionProps>`
  font-size: 0.9rem;
  text-align: center;
  text-transform: none;
  letter-spacing: 0.01em;
  border: 1px solid ${props => props.theme.colors.emerald[900]};
  border-bottom-width: 4px;
  border-radius: 7px 2px 15px 2px;
  background-color: ${props => props.theme.colors.teal[500]};
  color: ${props => props.theme.colors.emerald[200]};
  padding: 1rem;
  
  display: none;
  
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    display: block;
  }
  
  grid-row-start: ${props => props.rowStart};
  grid-column-start: ${props => props.colStart};
  
  span.bold {
    font-weight: bold;
    text-decoration: underline;
    text-underline-offset: 4px;
    letter-spacing: 0.05em;
  }
  
  span.bold-simple {
    font-weight: bold;
    letter-spacing: 0.05em;
  }
`;

const MobileDescription = styled.div<MobileDescriptionProps>`
  display: block;
  grid-row-start: ${props => props.rowStart};
  grid-column-start: 1;
  grid-column-end: 4;
  margin-top: -1rem;
  font-size: 0.65rem;
  text-align: center;
  text-transform: none;
  letter-spacing: 0.01em;
  
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    display: none;
  }
  
  span.bold {
    font-weight: bold;
    letter-spacing: 0.05em;
    font-size: 0.7rem;
    text-shadow: ${props => props.theme.shadows.textSea};
  }
`;

const HomeIcon = styled.a`
  grid-row-start: 9;
  grid-column-start: 2;
  color: ${props => props.theme.colors.emerald[900]};
  transition: color 0.3s ease;
  
  &:hover {
    color: ${props => props.theme.colors.emerald[600]};
  }
  
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    grid-row-start: 5;
  }
`;
