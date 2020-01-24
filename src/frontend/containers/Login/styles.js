import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import { colors } from '../../GlobalStyle'

export const BackButton = styled(FaArrowLeft)`
  width: 28px;
  height: 28px;
  color: #000;
`

export const StyledLink = styled(Link)`
  position: absolute;
  top: 15px;
  left: 15px;
  img {
    width: 38px;
    height: 38px;
    &:hover {
      opacity: 0.9;
    }
  }
`

export const Container = styled.div`
  margin: auto;
  display: grid;
  grid-template-columns: 1fr;
  padding: 20px 30px;
  position: relative;
`

export const Form = styled.form`
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`

export const Input = styled.input`
  width: 100%;
  height: 48px;
  margin-bottom: 14px;
  padding-left: 14px;
  background: transparent;
  border: 1px solid ${colors.white};
  border-radius: 3px;
  font-size: 16px;
`

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
`

export const Button = styled.button`
  width: 100%;
  height: 48px;
  display: inline-block;
  margin-bottom: 10px;
  background: ${colors.greenCool};
  color: ${colors.white};
  font-size: 16px;
  border-radius: 3px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    opacity: 0.9;
  }
`

export const Register = styled.div`
  margin-top: 20px;
  font-size: 16px;
  a {
    margin-left: 20px;
    color: ${colors.lila};
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`
