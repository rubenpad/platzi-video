import styled from 'styled-components';

export const Back = styled.div`
  position: fixed;
  top: 25px;
  left: 25px;
  color: #fff;
  z-index: 1;
`;

export const Button = styled.button`
  text-decoration: none;
  color: white;
  background: rgba(0, 0, 0, 0.3);
  padding: 5px;
  font-size: 18px;
  border-radius: 5px;
  border: 0;
  outline: 0;
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

  &:hover {
    ${Back} {
      display: block;
    }
  }
`;
