import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  width: 100%;
  padding-top: 10px;
  background: #fff;
  position: absolute;
  top: 200px;
  z-index: 1;
`;

export const Item = styled.li`
  margin-bottom: 2px;
  text-align: left;
  font-size: 1.8rem;
  cursor: pointer;
  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;

export const SLink = styled(Link)`
  width: 100%;
  margin-left: 8px;
  display: flex;
  align-items: center;
  color: #000;
`;
