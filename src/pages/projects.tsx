import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { X } from "lucide-react";
import { theme } from "../styles/theme";
import {
  GlobalStyle,
  GradientContainer,
  GlassBox,
  GridContainer,
  groovy,
  subtleFloat,
  slideInFromBottom,
  zoomInFromCenter,
  HomeLink,
  HomeLinkIcon,
  HomeLinkText,
  HomeLinkGradientIcon,
} from "../styles/globalStyles";
import { ProjectData, projectsData, techConfig } from "../utils";
import { Milestone } from "lucide-react";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ProjectsWrapper id="projects">
        <ProjectsGrid>
          {projectsData.map((project) => (
            <ProjectBoxContainer
              key={project.id}
              project={project}
              onProjectSelect={() => setSelectedProject(project.id)}
            />
          ))}
        </ProjectsGrid>
        {selectedProject !== null && (
          <ProjectDetail onClick={() => setSelectedProject(null)}>
            <DetailContent onClick={(e) => e.stopPropagation()}>
              {(() => {
                const project = projectsData.find(
                  (p) => p.id === selectedProject
                );
                if (!project) return null;

                return (
                  <ProjectDetailLayout>
                    <ProjectDetailLeft>
                      <ProjectDetailHeader>{project.title}</ProjectDetailHeader>
                      {project.status !== "completed" && (
                        <StatusBadge status={project.status}>
                          {project.status}
                        </StatusBadge>
                      )}
                      <ProjectDetailDescription>
                        {project.longDescription}
                      </ProjectDetailDescription>
                      <TechStack>
                        {project.technologies.map((tech, index) => (
                          <TechTag key={index}>{tech}</TechTag>
                        ))}
                      </TechStack>
                      <ButtonGroup>
                        {project.githubUrl && (
                          <ProjectButton
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            GitHub
                          </ProjectButton>
                        )}
                        {project.demoUrl && (
                          <ProjectButton
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View App
                          </ProjectButton>
                        )}
                      </ButtonGroup>
                    </ProjectDetailLeft>
                    <ProjectDetailRight>
                      {project.screenshotUrl && (
                        <ScreenshotContainer>
                          <ProjectScreenshot
                            src={project.screenshotUrl}
                            alt={`${project.title} screenshot`}
                          />
                        </ScreenshotContainer>
                      )}
                    </ProjectDetailRight>
                  </ProjectDetailLayout>
                );
              })()}
              <CloseButton onClick={() => setSelectedProject(null)}>
                <X size={20} />
              </CloseButton>
            </DetailContent>
          </ProjectDetail>
        )}
        <HomeLink href="/" id="home-link" aria-label="Home">
          <HomeLinkIcon>
            <HomeLinkGradientIcon>
              <Milestone size={18} style={{ transform: "scaleX(-1)" }} />
            </HomeLinkGradientIcon>
          </HomeLinkIcon>
          <HomeLinkText>Back to Home</HomeLinkText>
        </HomeLink>
      </ProjectsWrapper>
    </ThemeProvider>
  );
}

interface ProjectBoxContainerProps {
  project: ProjectData;
  onProjectSelect: () => void;
}

function ProjectBoxContainer({
  project,
  onProjectSelect,
}: ProjectBoxContainerProps) {
  const handleClick = () => {
    onProjectSelect();
  };

  return (
    <ProjectBox
      style={{
        marginBottom: project.id < 3 ? "-2rem" : "0",
        marginTop: project.id >= 3 ? "-2rem" : "0",
      }}
      onClick={handleClick}
    >
      <ProjectHeader>{project.title}</ProjectHeader>
      <ProjectDescription>{project.description}</ProjectDescription>
      <CardTechBadges>
        <BadgeRow>
          {project.technologies.slice(0, 3).map((tech, index) => {
            const config = techConfig[tech] || {
              color: "#ffffff",
              bgColor: "#6B7280",
              icon: "🔧",
            };
            return (
              <CardTechBadge
                key={index}
                color={config.color}
                bgColor={config.bgColor}
              >
                <span className="icon">{config.icon}</span>
                {tech}
              </CardTechBadge>
            );
          })}
        </BadgeRow>
        {project.technologies.length > 3 && (
          <BadgeRow>
            {project.technologies.slice(3, 5).map((tech, index) => {
              const config = techConfig[tech] || {
                color: "#ffffff",
                bgColor: "#6B7280",
                icon: "🔧",
              };
              return (
                <CardTechBadge
                  key={index + 3}
                  color={config.color}
                  bgColor={config.bgColor}
                >
                  <span className="icon">{config.icon}</span>
                  {tech}
                </CardTechBadge>
              );
            })}
            {project.technologies.length > 5 && (
              <MoreBadge>+{project.technologies.length - 5}</MoreBadge>
            )}
          </BadgeRow>
        )}
      </CardTechBadges>
    </ProjectBox>
  );
}

const ProjectsWrapper = styled(GradientContainer)`
  height: 100%;
  width: 100%;
  position: relative;
  background: ${(props) =>
    props.theme?.gradients?.secondary ||
    "linear-gradient(rgb(253, 224, 71), rgb(16, 185, 129), rgb(8, 145, 178))"};
  background-size: 200% auto;
  animation: ${groovy} 30s ease-in-out infinite;
  background-size: 200% auto;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const ProjectHeader = styled.h1`
  background: linear-gradient(45deg, #07b589ff, #c44569);
  color: #d91556ff;
  font-size: 1.5rem;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 400;
  margin-bottom: 0.5rem;
  font-family: ${(props) =>
    props.theme?.fonts.secondary || '"Inter", sans-serif'};
`;

const ProjectDescription = styled.p`
  font-weight: 300;
  letter-spacing: 0.5px;
  color: #7d0829b4;
  font-size: 0.9rem;
  text-align: center;
  line-height: 1.4;
  padding: 0 1rem;
  margin-bottom: 1rem;
  font-family: ${(props) =>
    props.theme?.fonts.secondary || '"Inter", sans-serif'};
`;

const CardTechBadges = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  max-width: 100%;
`;

const BadgeRow = styled.div`
  display: flex;
  gap: 0.4rem;
  justify-content: center;
  align-items: center;
`;

const CardTechBadge = styled.div<{ color: string; bgColor: string }>`
  display: flex;
  font-family: ${(props) =>
    props.theme?.fonts?.secondary || '"Inter", sans-serif'};
  font-weight: 300;
  letter-spacing: 0.5px;
  align-items: center;
  gap: 0.3rem;
  background: ${(props) => props.bgColor};
  color: ${(props) =>
    props.color === "#ffffff"
      ? "#ffffff"
      : props.bgColor === "#F7DF1E"
      ? "#000000"
      : props.color};
  padding: 0.3rem 0.6rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  white-space: nowrap;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1),
    0 1px 0 rgba(255, 255, 255, 0.1) inset, 0 -1px 0 rgba(0, 0, 0, 0.1) inset;
  transition: all 0.2s ease;

  .icon {
    font-size: 0.8rem;
    filter: ${(props) =>
      props.bgColor === "#ffffff" ? "none" : "brightness(1.1)"};
  }

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15),
      0 1px 0 rgba(255, 255, 255, 0.15) inset,
      0 -1px 0 rgba(0, 0, 0, 0.15) inset;
  }
`;

const MoreBadge = styled.div`
  font-family: ${(props) =>
    props.theme?.fonts?.secondary || '"Inter", sans-serif'};
  font-weight: 300;
  letter-spacing: 0.5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.2);
  color: rgba(255, 255, 255, 0.8);
  padding: 0.2rem 0.6rem;
  border-radius: 12px;
  font-size: 0.7rem;
  border: 0.1px solid rgba(255, 255, 255, 0.3);
`;

const ProjectsGrid = styled(GridContainer)`
  width: 100%;
  height: 100%;
`;

const ProjectBox = styled(GlassBox)`
  width: 30vw;
  height: 30vh;
  animation: ${subtleFloat} 6s ease-in-out infinite;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: translateY(-4px) scale(1.02);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3),
      inset 0 1px 0 rgba(255, 255, 255, 0.2), inset 0 -1px 0 rgba(0, 0, 0, 0.3);
  }

  &:nth-child(2n) {
    animation-delay: -2s;
  }

  &:nth-child(3n) {
    animation-delay: -4s;
  }
`;

const ProjectDetail = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  cursor: pointer;
  animation: ${slideInFromBottom} 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    forwards;
`;

const DetailContent = styled.div`
  background: linear-gradient(
    -120deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.05) 50%,
    rgba(255, 255, 255, 0.1) 100%
  );
  backdrop-filter: blur(20px) saturate(120%);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 1rem;
  padding: 3rem;
  max-width: 1200px;
  width: 95%;
  max-height: 80vh;
  overflow-y: auto;
  color: white;
  position: relative;
  cursor: default;
  animation: ${zoomInFromCenter} 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    0.2s backwards;
  transform-origin: center center;

  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 0.9;
      transform: translateY(0);
    }
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: white;
    transform: scale(1.1);
  }
`;

const ProjectDetailLayout = styled.div`
  display: flex;
  gap: 2rem;
  width: 100%;
  height: 100%;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ProjectDetailLeft = styled.div`
  flex: 1;
  text-align: left;
`;

const ProjectDetailRight = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ScreenshotContainer = styled.div`
  width: 100%;
  max-width: 500px;
`;

const ProjectScreenshot = styled.img`
  width: 100%;
  height: auto;
  max-height: 400px;
  border-radius: 12px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  object-fit: cover;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 12px 48px rgba(0, 0, 0, 0.4);
  }
`;

const StatusBadge = styled.div<{
  status: "completed" | "in-progress" | "planned";
}>`
  display: inline-block;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 0.5rem 0 1rem 0;
  background: ${(props) => {
    switch (props.status) {
      case "completed":
        return "linear-gradient(45deg, #10b981, #34d399)";
      case "in-progress":
        return "linear-gradient(45deg, #f59e0b, #fbbf24)";
      case "planned":
        return "linear-gradient(45deg, #6366f1, #8b5cf6)";
      default:
        return "#6b7280";
    }
  }};
  color: white;
`;

const ProjectDetailHeader = styled.h2`
  text-align: center;
  text-transform: uppercase !important;
  font-size: 2.5rem;
  font-weight: 100;
  margin-bottom: 1rem;
  background: ${(props) =>
    props.theme?.gradients?.animated ||
    "linear-gradient(-210deg, #17ac07 0%, #04cb7b 40%, #8c58b0 60%, #04cb7b 80%, #17ac07 100%)"};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  opacity: 0;
  animation: fadeInUp 0.6s ease-out 0.5s forwards;

  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const ProjectDetailDescription = styled.p`
  text-align: center;
  font-family: ${(props) =>
    props.theme?.fonts.secondary || '"Inter", sans-serif'} !important;
  font-weight: 200;
  font-size: 1.2rem;
  opacity: 0;
  animation: fadeInUp 0.6s ease-out 0.7s forwards;

  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 0.9;
      transform: translateY(0);
    }
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  margin: 1.5rem 0;
`;

const TechTag = styled.span`
  font-family: ${(props) =>
    props.theme?.fonts.secondary || '"Inter", sans-serif'} !important;
  font-weight: 200;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  padding: 0.3rem 0.8rem;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.9);
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
`;

const ProjectButton = styled.a`
  font-family: ${(props) =>
    props.theme?.fonts.secondary || '"Inter", sans-serif'} !important;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 1px;
  background: ${(props) => props.theme?.gradients?.secondary};
  color: #000000;
  padding: 0.7rem 1.5rem;
  border-radius: 25px;
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
    filter: brightness(1.1);
  }
`;
