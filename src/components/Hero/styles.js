import styled from 'styled-components';
import { colors } from '../../GlobalStyle';

export const Wrapper = styled.div`
  width: 100%;
  height: 80vh;
  padding: 70px 45px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TextBox = styled.div`
  width: 100%;
  max-width: 640px;
  margin: 0 auto;
  padding: 75px 0;
  text-align: center;
  background: transparent;
  position: relative;
`;

export const Title = styled.h1`
  font-size: 3.125rem;
  line-height: 1.1;
  margin-bottom: 0.5rem;
  color: #000;
`;

export const Subtitle = styled.h2`
  margin: 0.83em 0;
  font-size: 1.625rem;
  font-weight: normal;
  color: #000;
`;

export const Cta = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TryButton = styled.a`
  padding: 14px 34px;
  display: flex;
  align-items: center;
  background: ${colors.primary};
  border-radius: 3px;
  text-transform: uppercase;
  font-size: 1.625rem;
  color: #000;

  span {
    padding-right: 10px;
  }
`;
