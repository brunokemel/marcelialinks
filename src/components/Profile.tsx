import styled from 'styled-components';
import { colors } from '../styles/colors';
import { LinkCard } from './LinkCard';

const Container = styled.div`
  max-width: 680px;
  margin: 0 auto;
  padding: 2rem 1rem;

  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 1rem 0.8rem;
  }
`;

const ProfileImage = styled.img`
  width: 96px;
  height: 96px;
  border-radius: 50%;
  margin: 0 auto 1rem;
  display: block;
  border: 2px solid ${colors.accent};

  @media (max-width: 480px) {
    width: 80px;
    height: 80px;
  }
`;

const Name = styled.h1`
  color: ${colors.text};
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 0.5rem;

  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

const Bio = styled.p`
  color: ${colors.textSecondary};
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1rem;
  line-height: 1.5;
  padding: 0 1rem;

  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 0 0.5rem;
    margin-bottom: 1.5rem;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0 1rem;

  @media (max-width: 480px) {
    padding: 0 0.5rem;
    gap: 0.8rem;
  }
`;

interface ProfileProps {
  name: string;
  bio: string;
  imageUrl: string;
  links: Array<{
    title: string;
    url: string;
    icon?: string;
    highlight?: boolean;
  }>;
}

export function Profile({ name, bio, imageUrl, links }: ProfileProps) {
  return (
    <Container>
      <ProfileImage src={imageUrl} alt={name} />
      <Name>{name}</Name>
      <Bio>{bio}</Bio>
      <LinksContainer>
        {links.map((link, index) => (
          <LinkCard
            key={index}
            title={link.title}
            url={link.url}
            icon={link.icon}
            highlight={link.highlight}
          />
        ))}
      </LinksContainer>
    </Container>
  );
} 