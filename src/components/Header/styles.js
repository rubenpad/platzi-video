import styled from 'styled-components';
import { colors } from '../../GlobalStyle';

export const Wrapper = styled.header`
  width: 100%;
  padding-top: 20px;
  background: transparent;
  position: relative;
`;

export const Content = styled.div`
  height: 45px;
  margin: 0 45px;
  display: flex;
  align-items: center;
  position: relative;
`;

export const Logo = styled.img`
  width: 158px;
`;

export const AuthButton = styled.a`
  position: absolute;
  right: 0;
  border-radius: 3px;
  background-color: ${colors.primary};
  line-height: normal;
  padding: 7px 17px;
  font-weight: bold;
  font-size: 1rem;
`;
