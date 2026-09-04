import styled from "styled-components";
import { EnvironmentId } from "../types";
import { play } from "../styles/playStyles";

interface PlaceholderEnvProps {
  id: EnvironmentId;
  onBack: () => void;
}

const GRADIENTS: Record<EnvironmentId, string> = {
  about: `linear-gradient(135deg, #10254f 0%, #17a6b5 60%, #f3e2b8 100%)`,
  projects: `linear-gradient(135deg, #0b1e46 0%, #7b3ff2 55%, #8ef0ff 100%)`,
  resume: `linear-gradient(135deg, #123 0%, #159fb0 55%, #ffe98a 100%)`,
  contact: `linear-gradient(135deg, #0a1830 0%, #3a6ea5 55%, #cfe6ff 100%)`,
  hobbies: `linear-gradient(135deg, #2a0a2e 0%, #c2410c 55%, #ffd08a 100%)`,
};

const TITLES: Record<EnvironmentId, string> = {
  about: "About Me",
  projects: "My Projects",
  resume: "My Resume",
  contact: "Contact",
  hobbies: "My Hobbies",
};

// Temporary gradient environment. Milestone 4 fills each with real content
// (About lists, Projects gallery, Resume PDF) over a shadergradient backdrop.
export default function PlaceholderEnv({ id, onBack }: PlaceholderEnvProps) {
  return (
    <Env $bg={GRADIENTS[id]}>
      <EnvTitle>{TITLES[id]}</EnvTitle>
      <EnvNote>environment coming soon</EnvNote>
      <BackButton type="button" onClick={onBack}>
        &larr; back to the galaxy
      </BackButton>
    </Env>
  );
}

const Env = styled.div<{ $bg: string }>`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background: ${(p) => p.$bg};
  color: ${play.goldSoft};
`;

const EnvTitle = styled.h1`
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(2.5rem, 8vw, 6rem);
  margin: 0;
  text-shadow: 0 4px 24px rgba(0, 0, 0, 0.4);
`;

const EnvNote = styled.p`
  font-family: "Inter", sans-serif;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  font-size: 0.85rem;
  opacity: 0.8;
`;

const BackButton = styled.button`
  margin-top: 1.5rem;
  padding: 0.6rem 1.1rem;
  font-family: "Inter", sans-serif;
  font-size: 0.8rem;
  color: ${play.goldSoft};
  background: rgba(10, 14, 30, 0.45);
  border: 1px solid rgba(246, 226, 160, 0.4);
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: rgba(10, 14, 30, 0.7);
  }
`;
