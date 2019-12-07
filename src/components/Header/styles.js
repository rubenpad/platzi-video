import styled from 'styled-components';
import { colors } from '../../GlobalStyle';

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img`
  width: 200px;
  margin-left: 30px;
  cursor: pointer;
`;

export const Profile = styled.div`
  margin-right: 30px;
  position: relative;
  cursor: pointer;

  &:hover {
    ul {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

export const Menu = styled.ul`
  width: 100px;
  height: 60px;
  display: none;
  text-align: center;
  list-style: none;
  position: absolute;
  bottom: -60px;
  right: 10px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 4px;
`;

export const Item = styled.li`
  width: 100%;
  margin-bottom: 5px;
  a {
    color: #000;
    text-decoration: none;
  }

  &:hover {
    background: ${colors.lila};
  }
`;
