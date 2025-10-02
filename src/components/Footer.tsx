import styled from 'styled-components';
import { colors } from '../styles/colors';
import 'bootstrap-icons/font/bootstrap-icons.css';

const FooterContainer = styled.footer`
  text-align: center;
  padding: 1rem;
  margin-top: 2rem;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 0.5rem;
`;

const SocialLink = styled.a`
  color: ${colors.textSecondary};
  font-size: 0.9rem;
  text-decoration: none;
  transition: color 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    color: ${colors.accent};
  }
`;

const Icon = styled.i`
  font-size: 1rem;
`;

const Copyright = styled.span`
  color: ${colors.textSecondary};
  font-size: 0.8rem;
`;

export function Footer() {
  return (
    <FooterContainer>
      <SocialLinks>
        <SocialLink href="https://github.com/brunokemel" target="_blank" rel="noopener noreferrer">
          <Icon className="bi bi-github" />
          @brunokemel
        </SocialLink>
        <SocialLink href="https://www.instagram.com/kemel.js/" target="_blank" rel="noopener noreferrer">
          <Icon className="bi bi-instagram" />
          @kemel.js
        </SocialLink>
        <SocialLink href="https://www.linkedin.com/in/bruno-kemel/" target="_blank" rel="noopener noreferrer">
          <Icon className="bi bi-linkedin" />
          @bruno-matos
        </SocialLink>
      </SocialLinks>
      <Copyright>© 2025 Bruno Kemel. Todos os direitos reservados.</Copyright>
    </FooterContainer>
  );
} 