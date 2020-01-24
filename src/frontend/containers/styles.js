import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import { colors } from '../GlobalStyle'

export const Link = styled(LinkRouter)`
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

export const Div = styled.div`
  width: 100%;
  max-width: 362px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr;
  padding: 20px 30px;
  position: relative;
`

export const Button = styled.button`
  width: 100%;
  padding: 8px 14px;
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

export const RegisterBox = styled.div`
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
// Player
export const BackButton = styled(FaArrowLeft)`
  width: 32px;
  height: 32px;
  position: fixed;
  top: 25px;
  left: 25px;
  color: #fff;
  z-index: 1;
  cursor: pointer;
`

export const Video = styled.video`
  object-fit: cover;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  position: absolute;
  top: 0;
  left: 0;
`
