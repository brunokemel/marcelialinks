import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Marcelia Corrêa heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Marcelia Corrêa/i);
  expect(headingElement).toBeInTheDocument();
});