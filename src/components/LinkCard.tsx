import styled, { keyframes } from 'styled-components';
import { colors } from '../styles/colors';
import 'bootstrap-icons/font/bootstrap-icons.css';

const float = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(0px);
  }
`;

interface LinkCardProps {
  title: string;
  url: string;
  icon?: string;
  highlight?: boolean;
}

const Card = styled.a<{ highlight?: boolean }>`
  display: flex;
  align-items: center;
  padding: ${props => props.highlight ? '1.5rem 2rem' : '1rem 1.5rem'};
  background-color: ${props => props.highlight ? colors.accent : colors.cardBackground};
  border: 2px solid ${props => props.highlight ? colors.accent : colors.border};
  border-radius: 30px;
  margin-bottom: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  animation: ${props => props.highlight ? float : 'none'} 3s ease-in-out infinite;

  @media (max-width: 768px) {
    padding: ${props => props.highlight ? '1.3rem 1.8rem' : '0.9rem 1.3rem'};
  }

  @media (max-width: 480px) {
    padding: ${props => props.highlight ? '1.1rem 1.5rem' : '0.8rem 1.2rem'};
    border-radius: 25px;
  }

  &:hover {
    transform: translateY(-2px);
    border-color: ${props => props.highlight ? colors.hover : colors.accent};
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    animation: none;
  }
`;

const Icon = styled.i<{ highlight?: boolean }>`
  font-size: ${props => props.highlight ? '2rem' : '1.5rem'};
  margin-right: 1rem;
  color: ${props => props.highlight ? colors.text : colors.accent};
  transition: color 0.3s ease;

  @media (max-width: 480px) {
    font-size: ${props => props.highlight ? '1.8rem' : '1.3rem'};
    margin-right: 0.8rem;
  }
`;

const Title = styled.span<{ highlight?: boolean }>`
  color: ${props => props.highlight ? colors.text : colors.text};
  font-size: ${props => props.highlight ? '1.3rem' : '1.1rem'};
  font-weight: ${props => props.highlight ? '600' : '500'};

  @media (max-width: 480px) {
    font-size: ${props => props.highlight ? '1.1rem' : '1rem'};
  }
`;

export function LinkCard({ title, url, icon, highlight }: LinkCardProps) {
  return (
    <Card href={url} target="_blank" rel="noopener noreferrer" highlight={highlight}>
      {icon && <Icon className={icon} highlight={highlight} />}
      <Title highlight={highlight}>{title}</Title>
    </Card>
  );
} 