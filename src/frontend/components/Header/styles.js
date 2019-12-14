import styled, { css } from 'styled-components';
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

export const Links = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  right: 0;
`;

export const StyledLink = styled(Link)`
  margin-right: 20px;
  padding: 7px 17px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  background: transparent;
  line-height: normal;
  color: #000;
  font-weight: bold;
  font-size: 1.6rem;
  transition: all 0.45s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
    transform: translate(0, -3px);
  }

  ${(props) => props.main &&
    css`
      border: none;
      color: white;
      background: ${colors.primary};

      &:hover {
        background: ${colors.primary};
        opacity: 0.9;
      }
    `}
`;
