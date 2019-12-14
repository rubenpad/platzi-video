import styled from 'styled-components';
import { colors } from '../../GlobalStyle';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    to top,
    ${colors.primary} 0%,
    ${colors.secondary} 100%
  );

  h1 {
    font-size: 3rem;
  }
  h1, h2 {
    color: #000;
  }
`;
