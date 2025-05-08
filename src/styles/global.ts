import { createGlobalStyle } from 'styled-components';
import { colors } from './colors';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${colors.background};
    color: ${colors.text};
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    color: ${colors.accent};
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: ${colors.hover};
    }
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
  }
`; 