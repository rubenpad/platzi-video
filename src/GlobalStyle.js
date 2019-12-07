import { css, createGlobalStyle } from 'styled-components';

const colors = {
  lila: '#8f57fd',
  light: '#ffffff',
  dark: '#000000',
  border: 'rgba(0, 0, 0, 0.09)',
};

const size = {
  small: 320,
  medium: 425,
  mediumL: 768,
  large: 1024,
};

const above = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${size[label]}px) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

const GlobalStyle = createGlobalStyle`
  * {
    @import url('https://fonts.googleapis.com/css?family=Muli&display=swap');
    
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Muli', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 
    'Open Sans', 'Helvetica Neue', sans-serif;
  }

  *:before, *:after { box-sizing: border-box; }

  button {
    background: transparent;
    border: 0;
    outline: 0;
  }

  body {
    width: 100%;
  }
`;

export { colors, above, GlobalStyle };
