import { css, createGlobalStyle } from 'styled-components';

const colors = {
  primary: '#8f57fd',
  secondary: '#21c08d',
  light: '#ffffff',
  semi: '#cccccc',
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
  ${css`
    @import url('https://fonts.googleapis.com/css?family=Muli&display=swap');
  `}

  * {    
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }

  *::before, *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    font-family: 'Muli', sans-serif;
    font-size: 10px;
  }

  body {

  }

  ul { 
    list-style: none; 
  }

  h1, h2, h3 { 
    color: #fff; 
  }

  a {
    color: #fff;
    text-decoration: none;
  }

  p {
    margin: 0.5rem 0;
    
  }

  button {
    background: transparent;
    border: 0;
    outline: 0;
  }
`;

export { colors, above, GlobalStyle };
