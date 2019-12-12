import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { colors } from '../../GlobalStyle';

export const Wrapper = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  background: transparent;
  position: absolute;
  top: 0;
  z-index: 1;
`;

export const Logo = styled.img`
  width: 158px;
  margin-left: 20px;
`;

export const StyledLink = styled(Link)`
  margin-right: 20px;
  padding: 7px 17px;
  border-radius: 3px;
  background-color: ${colors.primary};
  line-height: normal;
  font-weight: bold;
  font-size: 1.6rem;
  position: absolute;
  right: 0;
  transition: all 0.45s ease;

  &:hover {
    opacity: 0.9;
    transform: translate(0, -3px);
  }
`;
