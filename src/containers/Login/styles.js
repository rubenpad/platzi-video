import styled from 'styled-components';
import { colors } from '../../GlobalStyle';
import loginBackground from '../../assets/login-background.svg';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url(${loginBackground}) no-repeat right, ${colors.primary};
  position: relative;
`;

export const Container = styled.div`
  width: 400px;
  height: 400px;
  padding: 20px 30px;
  border: 1px solid ${colors.light};
  border-radius: 3px;
  background: ${colors.light};
  position: relative;
`;

export const Line = styled.div`
  text-align: center;
  position: relative;
  margin-bottom: 16px;
  font-size: 1.4rem;

  span::before {
    width: 45%;
    height: 1px;
    content: '';
    position: absolute;
    background-color: ${colors.semi};
    left: 0;
    top: 50%;
  }

  span::after {
    width: 45%;
    height: 1px;
    content: '';
    position: absolute;
    background-color: ${colors.semi};
    right: 0;
    top: 50%;
  }
`;

export const Option = styled.div`
  width: 100%;
  height: 38px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${colors.semi};
  border-radius: 3px;
  cursor: pointer;
  font-size: 16px;

  img {
    width: 24px;
    margin-right: 10px;
  }

  &:hover {
    background: ${colors.semi};
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 100%;
  height: 48px;
  margin-bottom: 14px;
  padding-left: 14px;
  background: transparent;
  border: 1px solid ${colors.semi};
  border-radius: 3px;
  font-size: 16px;
`;

export const CheckBox = styled.div`
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  position: relative;
  font-size: 16px;

  input {
    cursor: pointer;
  }

  span {
    padding-left: 6px;
  }

  a {
    position: absolute;
    right: 0;
    color: #000;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 48px;
  display: inline-block;
  margin-bottom: 10px;
  background: ${colors.secondary};
  color: ${colors.light};
  font-size: 16px;
  border-radius: 3px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    opacity: 0.9;
  }
`;

export const Register = styled.div`
  margin-top: 20px;
  font-size: 16px;
  a {
    margin-left: 20px;
    color: ${colors.light};
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;
