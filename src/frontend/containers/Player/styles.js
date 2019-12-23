import styled from 'styled-components';
import { FaArrowLeft } from 'react-icons/fa';

export const BackButton = styled(FaArrowLeft)`
  width: 32px;
  height: 32px;
  position: fixed;
  top: 25px;
  left: 25px;
  color: #fff;
  z-index: 1;
  cursor: pointer;
`;

export const Video = styled.video`
  object-fit: cover;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  position: absolute;
  top: 0;
  left: 0;
`;
