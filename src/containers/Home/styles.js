import styled from 'styled-components';
import { colors } from '../../GlobalStyle';

export const Container = styled.div`
  width: 100%;
  background-image: linear-gradient(
    to top,
    ${colors.primary} 0%,
    ${colors.secondary} 100%
  );
`;
