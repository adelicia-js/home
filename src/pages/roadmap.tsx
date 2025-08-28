import React, { useState, ReactElement, useEffect} from "react";
import {
  CheckCircle,
  Circle,
  Play,
  Palette,
  Gamepad2,
  Code,
  Sparkles,
  Lock,
  Eye,
  EyeOff,
} from "lucide-react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import { GlobalStyle } from "../styles/globalStyles";

interface RoadmapItem {
  id: string;
  title: string;
  description: string;
  time: string;
  resources: string[];
}

interface Track {
  title: string;
  icon: ReactElement;
  color: string;
  description: string;
  items: RoadmapItem[];
}

interface TrackCardProps {
  isActive: boolean;
}

interface TrackIconProps {
  bgColor: string;
}

interface SectionIconProps {
  bgColor: string;
}

interface ItemCardProps {
  isCompleted: boolean;
}

interface ItemTitleProps {
  isCompleted: boolean;
}

type TrackKey = 'foundations' | 'gamedev' | 'creative' | 'advanced';

const CreativeCodingRoadmap = () => {
  const [completedItems, setCompletedItems] = useState<Set<string>>(new Set());
  const [activeTrack, setActiveTrack] = useState<TrackKey>("foundations");
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const CORRECT_PASSWORD = import.meta.env.VITE_ROADMAP_PASSWORD;

  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const savedAuth = window.localStorage.getItem("roadmapAuth");
      if (savedAuth === "true") {
        setIsAuthenticated(true);
      }
    }
  }, []);

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === CORRECT_PASSWORD) {
      setIsAuthenticated(true);
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.setItem("roadmapAuth", "true");
      }
      setError("");
    } else {
      setError("Incorrect password");
      setPassword("");
    }
  };

  const toggleComplete = (itemId: string) => {
    const newCompleted = new Set(completedItems);
    if (newCompleted.has(itemId)) {
      newCompleted.delete(itemId);
    } else {
      newCompleted.add(itemId);
    }
    setCompletedItems(newCompleted);
  };

  const tracks: Record<TrackKey, Track> = {
    foundations: {
      title: "Programming",
      icon: <Code className="w-5 h-5" />,
      color: "#3b82f6",
      description:
        "Build on your React skills with creative coding fundamentals",
      items: [
        {
          id: "canvas-basics",
          title: "HTML5 Canvas & Animation",
          description:
            "Learn canvas API, animation loops, and basic graphics programming",
          time: "2-3 weeks",
          resources: [
            "MDN Canvas Tutorial",
            "Coding Train Canvas videos",
            "Creative Coding with Canvas course",
          ],
        },
        {
          id: "webgl-three",
          title: "Three.js Fundamentals",
          description:
            "3D graphics in the browser - perfect for creative projects",
          time: "3-4 weeks",
          resources: [
            "Three.js Journey course",
            "Three.js documentation",
            "Build interactive 3D experiences",
          ],
        },
        {
          id: "generative-art",
          title: "Generative Art with p5.js",
          description: "Creative coding library for artists and designers",
          time: "2-3 weeks",
          resources: [
            "p5.js tutorials",
            "Nature of Code book",
            "Generative art examples",
          ],
        },
        {
          id: "math-for-graphics",
          title: "Math for Graphics (Leverage Your Background!)",
          description: "Applied math concepts for visual programming",
          time: "2 weeks",
          resources: [
            "Linear algebra for graphics",
            "Trigonometry in animation",
            "Statistics for procedural generation",
          ],
        },
      ],
    },
    gamedev: {
      title: "Game Development",
      icon: <Gamepad2 className="w-5 h-5" />,
      color: "#8b5cf6",
      description: "Explore game development with JavaScript and modern tools",
      items: [
        {
          id: "js-games",
          title: "JavaScript Game Development",
          description: "Build games with vanilla JS and HTML5 Canvas",
          time: "2-3 weeks",
          resources: [
            "JavaScript game tutorials",
            "Build Pong, Tetris, Platformer",
            "Game physics basics",
          ],
        },
        {
          id: "phaser",
          title: "Phaser.js Framework",
          description: "Popular 2D game framework for web games",
          time: "4-5 weeks",
          resources: [
            "Phaser 3 tutorials",
            "Build complete games",
            "Physics, sprites, animations",
          ],
        },
        {
          id: "react-games",
          title: "React-based Games & Interactive Apps",
          description: "Combine your React skills with game-like interactions",
          time: "2-3 weeks",
          resources: [
            "React Spring animations",
            "Interactive React components",
            "State management for games",
          ],
        },
        {
          id: "godot-basics",
          title: "Godot Engine (Optional)",
          description: "Explore a full game engine if you want to go deeper",
          time: "4-6 weeks",
          resources: [
            "Godot documentation",
            "GDScript tutorials",
            "2D game development",
          ],
        },
      ],
    },
    creative: {
      title: "Creative Design",
      icon: <Palette className="w-5 h-5" />,
      color: "#ec4899",
      description: "Enhance your creative skills and visual design abilities",
      items: [
        {
          id: "design-systems",
          title: "Advanced Design Systems",
          description: "Build beautiful, consistent UI systems",
          time: "2-3 weeks",
          resources: [
            "Design tokens",
            "Component libraries",
            "Figma to code workflows",
          ],
        },
        {
          id: "animations",
          title: "Advanced Web Animations",
          description: "Create engaging micro-interactions and animations",
          time: "3-4 weeks",
          resources: [
            "Framer Motion mastery",
            "CSS animations",
            "GSAP for complex animations",
          ],
        },
        {
          id: "data-viz",
          title: "Data Visualization",
          description: "Turn data into beautiful, interactive visuals",
          time: "3-4 weeks",
          resources: [
            "D3.js fundamentals",
            "Observable notebooks",
            "Chart.js advanced techniques",
          ],
        },
        {
          id: "creative-coding-projects",
          title: "Creative Coding Portfolio",
          description: "Build a portfolio of creative coding projects",
          time: "4-6 weeks",
          resources: [
            "Interactive art pieces",
            "Generative music visualizers",
            "Creative portfolio sites",
          ],
        },
      ],
    },
    advanced: {
      title: "Creative Tech",
      icon: <Sparkles className="w-5 h-5" />,
      color: "#f59e0b",
      description: "Push boundaries with cutting-edge creative technologies",
      items: [
        {
          id: "webxr",
          title: "WebXR & Immersive Experiences",
          description: "AR/VR experiences in the browser",
          time: "4-5 weeks",
          resources: [
            "A-Frame framework",
            "WebXR APIs",
            "Immersive web experiences",
          ],
        },
        {
          id: "ai-creative",
          title: "AI in Creative Coding",
          description: "Integrate AI/ML into creative projects",
          time: "3-4 weeks",
          resources: [
            "TensorFlow.js",
            "ml5.js for creative AI",
            "AI-generated art tools",
          ],
        },
        {
          id: "performance",
          title: "Performance Optimization for Creative Apps",
          description: "Make complex visual apps run smoothly",
          time: "2-3 weeks",
          resources: [
            "WebGL optimization",
            "Canvas performance",
            "Memory management for graphics",
          ],
        },
        {
          id: "indie-dev",
          title: "Indie Game/App Development",
          description: "Learn the business side of creative coding",
          time: "Ongoing",
          resources: [
            "Publishing platforms",
            "Monetization strategies",
            "Community building",
          ],
        },
      ],
    },
  };

  const getCompletionPercentage = (track: TrackKey) => {
    const trackItems = tracks[track].items;
    const completed = trackItems.filter((item) =>
      completedItems.has(item.id)
    ).length;
    return Math.round((completed / trackItems.length) * 100);
  };

  if (!isAuthenticated) {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <PasswordContainer>
          <PasswordModal>
            <PasswordHeader>
              <Lock size={32} />
              <PasswordTitle>Protected Content</PasswordTitle>
              <PasswordSubtitle>Enter password to access the roadmap</PasswordSubtitle>
            </PasswordHeader>
            
            <PasswordForm onSubmit={handlePasswordSubmit}>
              <PasswordInputWrapper>
                <PasswordInput
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  hasError={!!error}
                />
                <PasswordToggle 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </PasswordToggle>
              </PasswordInputWrapper>
              
              {error && <ErrorMessage>{error}</ErrorMessage>}
              
              <PasswordButton type="submit">
                Unlock Roadmap
              </PasswordButton>
            </PasswordForm>
          </PasswordModal>
        </PasswordContainer>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Header>
          <Title>Creative Programming Roadmap</Title>
          <Subtitle>
            A personalized learning path that combines your strong programming
            foundation with creative exploration in game development, visual
            design, and interactive experiences.
          </Subtitle>
        </Header>

        <TrackGrid>
          {Object.entries(tracks).map(([key, track]) => (
            <TrackCard
              key={key}
              isActive={activeTrack === key}
              onClick={() => setActiveTrack(key as TrackKey)}
            >
              <TrackCardContent>
                <TrackIcon bgColor={track.color}>{track.icon}</TrackIcon>
                <div>
                  <TrackCardTitle>{track.title}</TrackCardTitle>
                </div>
                <TrackCardPercentage>
                  {getCompletionPercentage(key as TrackKey)}%
                </TrackCardPercentage>
              </TrackCardContent>
              <TrackCardDescription>{track.description}</TrackCardDescription>
            </TrackCard>
          ))}
        </TrackGrid>

        <MainContent>
          <SectionHeader>
            <SectionIcon bgColor={tracks[activeTrack].color}>
              {tracks[activeTrack].icon}
            </SectionIcon>
            <div>
              <SectionTitle>{tracks[activeTrack].title}</SectionTitle>
              <SectionDescription>
                {tracks[activeTrack].description}
              </SectionDescription>
            </div>
          </SectionHeader>

          <ItemsContainer>
            {tracks[activeTrack].items.map((item) => (
              <ItemCard key={item.id} isCompleted={completedItems.has(item.id)}>
                <ItemCardContent>
                  <CheckButton onClick={() => toggleComplete(item.id)}>
                    {completedItems.has(item.id) ? (
                      <StyledCheckCircle />
                    ) : (
                      <StyledCircle />
                    )}
                  </CheckButton>

                  <ItemContent>
                    <ItemHeader>
                      <ItemTitle isCompleted={completedItems.has(item.id)}>
                        {item.title}
                      </ItemTitle>
                      <TimeTag>{item.time}</TimeTag>
                    </ItemHeader>

                    <ItemDescription>{item.description}</ItemDescription>

                    <ResourceContainer>
                      {item.resources.map((resource, idx) => (
                        <ResourceTag key={`${item.id}-${resource}-${idx}`}>
                          {resource}
                        </ResourceTag>
                      ))}
                    </ResourceContainer>
                  </ItemContent>
                </ItemCardContent>
              </ItemCard>
            ))}
          </ItemsContainer>

          <TipsCard>
            <TipsTitle>
              <Play />
              Learning Tips for Your Journey
            </TipsTitle>
            <TipsList>
              <TipsItem>
                • Start with the Foundations track to build creative coding
                skills on your React foundation
              </TipsItem>
              <TipsItem>
                • Your math/stats background is perfect for generative art and
                game physics!
              </TipsItem>
              <TipsItem>
                • Build small projects after each topic - creativity comes from
                practice
              </TipsItem>
              <TipsItem>
                • Join creative coding communities (OpenProcessing, CodePen,
                r/creativecoding)
              </TipsItem>
              <TipsItem>
                • Document your learning journey - creative coding is very
                visual and shareable
              </TipsItem>
            </TipsList>
          </TipsCard>
        </MainContent>
      </Container>
    </ThemeProvider>
  );
};

const Container = styled.div`
  max-width: 72rem;
  margin: 0 auto;
  padding: 1.5rem;
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  font-family: ${(props) => props.theme?.fonts?.secondary || '"Inter", sans-serif'};
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  font-family: ${(props) => props.theme?.fonts?.secondary || '"Inter", sans-serif'};
`;

const Title = styled.h1`
  font-size: 2.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #fff, #f0f8ff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  letter-spacing: -0.02em;
  font-family: ${(props) => props.theme?.fonts?.secondary || '"Inter", sans-serif'};
`;

const Subtitle = styled.p`
  font-size: 1.125rem;
  max-width: 42rem;
  margin: 0 auto;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  font-weight: 400;
  font-family: ${(props) => props.theme?.fonts?.secondary || '"Inter", sans-serif'};
`;

const TrackGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const TrackCard = styled.button<TrackCardProps>`
  padding: 1rem;
  border-radius: 0.5rem;
  transition: all 0.3s;
  transform: scale(1);
  background: ${(props) =>
    props.isActive
      ? "linear-gradient(135deg, rgba(255,255,255,0.25), rgba(255,255,255,0.1))"
      : "rgba(255, 255, 255, 0.1)"};
  backdrop-filter: blur(10px);
  border: ${(props) =>
    props.isActive
      ? "2px solid rgba(255,255,255,0.4)"
      : "1px solid rgba(255,255,255,0.2)"};
  box-shadow: ${(props) =>
    props.isActive
      ? "0 8px 32px rgba(0,0,0,0.1)"
      : "0 4px 16px rgba(0,0,0,0.05)"};
  color: white;
  font-family: ${(props) => props.theme?.fonts?.secondary || '"Inter", sans-serif'};

  &:hover {
    transform: scale(1.05);
  }
`;

const TrackCardContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

const TrackCardTitle = styled.h3`
  font-weight: 500;
  margin-bottom: 0.25rem;
  letter-spacing: -0.01em;
  font-family: ${(props) => props.theme?.fonts?.secondary || '"Inter", sans-serif'};
`;

const TrackCardDescription = styled.p`
  font-size: 0.875rem;
  opacity: 0.9;
  font-weight: 400;
  line-height: 1.5;
  font-family: ${(props) => props.theme?.fonts?.secondary || '"Inter", sans-serif'};
`;

const TrackCardPercentage = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
  font-family: ${(props) => props.theme?.fonts?.secondary || '"Inter", sans-serif'};
`;

const TrackIcon = styled.div<TrackIconProps>`
  padding: 0.5rem;
  border-radius: 9999px;
  color: white;
  background: ${(props) =>
    `linear-gradient(135deg, ${props.bgColor}, ${props.bgColor}dd)`};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const MainContent = styled.div`
  border-radius: 0.75rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.3);
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const SectionIcon = styled.div<SectionIconProps>`
  padding: 0.75rem;
  border-radius: 9999px;
  color: white;
  margin-right: 1rem;
  background: ${(props) =>
    `linear-gradient(135deg, ${props.bgColor}, ${props.bgColor}dd)`};
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1f2937;
  letter-spacing: -0.01em;
  font-family: ${(props) => props.theme?.fonts?.secondary || '"Inter", sans-serif'};
`;

const SectionDescription = styled.p`
  color: #4b5563;
  font-weight: 400;
  line-height: 1.5;
  font-family: ${(props) => props.theme?.fonts?.secondary || '"Inter", sans-serif'};
`;

const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ItemCard = styled.div<ItemCardProps>`
  padding: 1rem;
  border-radius: 0.5rem;
  transition: all 0.3s;
  background: ${(props) =>
    props.isCompleted
      ? "linear-gradient(135deg, #d4edda, #c3e6cb)"
      : "linear-gradient(135deg, #f8f9fa, #e9ecef)"};
  border: ${(props) =>
    props.isCompleted ? "2px solid #28a745" : "1px solid #dee2e6"};
  transform: ${(props) => (props.isCompleted ? "scale(1.02)" : "scale(1)")};

  &:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const ItemCardContent = styled.div`
  display: flex;
  align-items: flex-start;
`;

const CheckButton = styled.button`
  margin-right: 1rem;
  margin-top: 0.25rem;
  flex-shrink: 0;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.1);
  }

  border: none;
  background: none;
`;

const ItemContent = styled.div`
  flex-grow: 1;
`;

const ItemHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

const ItemTitle = styled.h3<ItemTitleProps>`
  font-weight: 500;
  color: ${(props) => (props.isCompleted ? "#166534" : "#1f2937")};
  letter-spacing: -0.01em;
  font-family: ${(props) => props.theme?.fonts?.secondary || '"Inter", sans-serif'};
`;

const ItemDescription = styled.p`
  color: #4b5563;
  margin-bottom: 0.75rem;
  font-weight: 400;
  line-height: 1.5;
  font-family: ${(props) => props.theme?.fonts?.secondary || '"Inter", sans-serif'};
`;

const TimeTag = styled.span`
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  background: linear-gradient(135deg, #6c757d, #495057);
  color: white;
  font-weight: 500;
  font-family: ${(props) => props.theme?.fonts?.secondary || '"Inter", sans-serif'};
`;

const ResourceContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const ResourceTag = styled.span`
  font-size: 0.7rem;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  background: linear-gradient(135deg, #007bff, #0056b3);
  color: white;
  font-weight: 400;
  font-family: ${(props) => props.theme?.fonts?.secondary || '"Inter", sans-serif'};
`;

const TipsCard = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  border-radius: 0.5rem;
  background: linear-gradient(
    135deg,
    rgba(0, 123, 255, 0.1),
    rgba(0, 86, 179, 0.05)
  );
  border: 1px solid rgba(0, 123, 255, 0.2);
  backdrop-filter: blur(5px);
`;

const TipsTitle = styled.h3`
  font-weight: 500;
  color: #1e40af;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.2rem;
  letter-spacing: -0.01em;
  font-family: ${(props) => props.theme?.fonts?.secondary || '"Inter", sans-serif'};
`;

const TipsList = styled.ul`
  font-size: 0.875rem;
  color: #1d4ed8;
  list-style: none;
  padding: 0;
  margin: 0;
  font-weight: 400;
  line-height: 1.6;
  font-family: ${(props) => props.theme?.fonts?.secondary || '"Inter", sans-serif'};
`;

const TipsItem = styled.li`
  margin-bottom: 0.25rem;
  font-family: ${(props) => props.theme?.fonts?.secondary || '"Inter", sans-serif'};
`;

const StyledCheckCircle = styled(CheckCircle)`
  width: 1.5rem;
  height: 1.5rem;
  color: #22c55e;
  filter: drop-shadow(0 2px 4px rgba(40, 167, 69, 0.3));
`;

const StyledCircle = styled(Circle)`
  width: 1.5rem;
  height: 1.5rem;
  color: #9ca3af;
`;

const PasswordContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  font-family: ${(props) => props.theme?.fonts?.secondary || '"Inter", sans-serif'};
`;

const PasswordModal = styled.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.3);
  max-width: 400px;
  width: 100%;
  margin: 1rem;
`;

const PasswordHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  
  svg {
    color: #667eea;
    margin-bottom: 1rem;
  }
`;

const PasswordTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.5rem;
  font-family: ${(props) => props.theme?.fonts?.secondary || '"Inter", sans-serif'};
`;

const PasswordSubtitle = styled.p`
  color: #6b7280;
  font-size: 0.875rem;
  font-family: ${(props) => props.theme?.fonts?.secondary || '"Inter", sans-serif'};
`;

const PasswordForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const PasswordInputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

interface PasswordInputProps {
  hasError: boolean;
}

const PasswordInput = styled.input<PasswordInputProps>`
  width: 100%;
  padding: 0.75rem 3rem 0.75rem 1rem;
  border: 2px solid ${props => props.hasError ? '#ef4444' : '#e5e7eb'};
  border-radius: 0.5rem;
  font-size: 1rem;
  font-family: ${(props) => props.theme?.fonts?.secondary || '"Inter", sans-serif'};
  background: white;
  
  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`;

const PasswordToggle = styled.button`
  position: absolute;
  right: 0.75rem;
  background: none;
  border: none;
  color: #6b7280;
  cursor: pointer;
  padding: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    color: #374151;
  }
`;

const ErrorMessage = styled.div`
  color: #ef4444;
  font-size: 0.875rem;
  text-align: center;
  font-family: ${(props) => props.theme?.fonts?.secondary || '"Inter", sans-serif'};
`;

const PasswordButton = styled.button`
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
  font-family: ${(props) => props.theme?.fonts?.secondary || '"Inter", sans-serif'};
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
  }
`;

export default CreativeCodingRoadmap;
