import styled, { ThemeProvider } from "styled-components";
import { Milestone } from "lucide-react";
import { theme } from "../styles/theme";
import { GlobalStyle, GradientContainer, GlassBox, groovy } from "../styles/globalStyles";

export default function AboutMe() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AboutWrapper id="about-me">
        <Container1 id="profile-passions-skills">
          <ProfilePicBox id="pfp-box">
            <CardHeader id="greeting">
              <CardIcon>🙋🏻‍♀️</CardIcon>
              Hey there!
            </CardHeader>
            <ProfileImageContainer>
              <ProfileImage src="/me.jpg" alt="Profile picture" />
            </ProfileImageContainer>
          </ProfilePicBox>
          <BioBox id="passions-box">
            <CardHeader id="passions-header">
              <CardIcon>🎨</CardIcon>
              My Passions
            </CardHeader>
            <CardTextBox id="passions-list">
              <CardText>Building digital experiences</CardText>
              <CardText>Crafting interactable websites</CardText>
              <CardText>Designing user-friendly interfaces</CardText>
              <CardText>Architecting responsive layouts</CardText>
              <CardText>Furthering my knowledge</CardText>
            </CardTextBox>
          </BioBox>
          <BioBox id="skills-box">
            <CardHeader id="skills-header">
              <CardIcon>⚒️</CardIcon>
              My Skills
            </CardHeader>
            <CardTextBox id="skills-list">
              <CardText>
                React (along with Vite, Next.js), React Native
              </CardText>
              <CardText>styled-components, Tailwind CSS</CardText>
              <CardText>Redux, React Query, Jotai</CardText>
              <CardText>Node.js, Express</CardText>
              <CardText>MongoDB, Prisma, Supabase</CardText>
              <CardText>Hosting via Cloudflare, Vercel, Github</CardText>
            </CardTextBox>
          </BioBox>
        </Container1>
        <Container2 id="current-projects">
          <DetailsBox id="projects-box">
            <CardHeader id="projects-header">
              <CardIcon>🏗️</CardIcon>
              What I'm Currently Working On
            </CardHeader>
            <CardTextBox id="projects-list">
              <CardText>
                Learning Three.js to add some 3D magic to web experiences
              </CardText>
              <CardText>
                Studying advanced UI design patterns and micro-interactions
              </CardText>
              <CardText>
                Exploring serverless architectures and their integration with
                traditional backends
              </CardText>

              <CardText
                id="see-projects-text"
                style={{
                  listStyleType: "none",
                  marginLeft: "-1rem",
                  fontWeight: 300,
                }}
              >
                Check out{" "}
                <ProjectsLink href="/projects">my projects</ProjectsLink> to see
                what I've been up to lately!
              </CardText>
            </CardTextBox>
          </DetailsBox>
        </Container2>
        <HomeLink href="/" id="home-link" aria-label="Home">
          <HomeLinkIcon>
            <Milestone size={18} style={{ transform: "scaleX(-1)" }} />
          </HomeLinkIcon>
          <HomeLinkText>Home</HomeLinkText>
        </HomeLink>
      </AboutWrapper>
    </ThemeProvider>
  );
}

const AboutWrapper = styled(GradientContainer)`
  position: relative;
  background: ${props => props.theme?.gradients?.secondary || 'linear-gradient(rgb(253, 224, 71), rgb(16, 185, 129), rgb(8, 145, 178))'};
  background-size: 200% auto;
  animation: ${groovy} 30s ease-in-out infinite;
  background-size: 200% auto;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  `;

const Container1 = styled.div`
  width: 90vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Container2 = styled.div`
  width: 90vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const ProfilePicBox = styled(GlassBox)`
  width: 20vw;
  height: 20vw;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 1.5rem;
  gap: 1rem;
`;

const ProfileImageContainer = styled.div`
  flex: 1;
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`;

const CardHeader = styled.h2`
  display: flex;
  font-family: ${(props) => props.theme?.fonts?.secondary || '"Inter", sans-serif'};
  font-weight: 300;
  font-size: 1.5rem;
  flex-direction: row;
  height: fit-content;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const BioBox = styled(GlassBox)`
  width: 33vw;
  height: 20vw;
  flex-direction: column;
  align-items: flex-start;
`;

const DetailsBox = styled(GlassBox)`
  height: 20vw;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
`;

const CardIcon = styled.span`
  font-size: 1.5rem;
  padding: 1px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 100%;
`;

const CardTextBox = styled.ul`
  margin-top: 0.5rem;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  padding: 0.5rem 0 0.5rem 1.25rem;
`;

const CardText = styled.li`
  font-family: ${(props) => props.theme?.fonts?.secondary || '"Inter", sans-serif'};
  font-weight: 200;
  text-align: left;
  list-style-type: circle;
`;

const ProjectsLink = styled.a`
  font-family: ${(props) => props.theme?.fonts?.secondary || '"Inter", sans-serif'};
  color: #ff6b9d;
  text-decoration: none;
  font-weight: 600;
  background: linear-gradient(45deg, #06aa81ff, #c44569);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  transition: all 0.3s ease;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(45deg, #06aa81ff, #c44569);
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }

  &:hover {
    transform: translateY(1px);
  }
`;

const HomeLink = styled.a`
  text-decoration: none;
  position: absolute;
  bottom: 3%;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1.25rem;
  background: linear-gradient(
    135deg,
    rgba(16, 185, 129, 0.15) 0%,
    rgba(59, 130, 246, 0.15) 50%,
    rgba(139, 69, 19, 0.15) 100%
  );
  backdrop-filter: blur(15px) saturate(150%);
  -webkit-backdrop-filter: blur(15px) saturate(150%);
  border: 1.5px solid rgba(255, 255, 255, 0.2);
  border-radius: 1.5rem;
  color: rgba(255, 255, 255, 0.9);
  font-family: ${(props) => props.theme?.fonts?.secondary || '"Inter", sans-serif'};
  font-weight: 500;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 1.5rem;
    padding: 1.5px;
    background: linear-gradient(
      135deg,
      rgba(16, 185, 129, 0.5),
      rgba(59, 130, 246, 0.5),
      rgba(139, 69, 19, 0.5)
    );
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: xor;
    -webkit-mask-composite: xor;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-2px) scale(1.03);
    color: rgba(255, 255, 255, 1);
    box-shadow: 
      0 15px 30px rgba(16, 185, 129, 0.2),
      0 8px 15px rgba(59, 130, 246, 0.15),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);
    
    &::after {
      opacity: 1;
    }
  }

  &:active {
    transform: translateY(-1px) scale(1.01);
  }
`;

const HomeLinkIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05));
  transition: all 0.3s ease;
  
  ${HomeLink}:hover & {
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.1));
  }
`;

const HomeLinkText = styled.span`
  font-family: ${(props) => props.theme?.fonts?.secondary || '"Inter", sans-serif'};
  font-size: 0.95rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  background: linear-gradient(
    135deg,
    #10b981,
    #3b82f6,
    #8b4513
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  transition: all 0.3s ease;
  
  ${HomeLink}:hover & {
    background: linear-gradient(
      135deg,
      #34d399,
      #60a5fa,
      #a0522d
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;
