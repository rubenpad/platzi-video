import styled from 'styled-components'

export const Menu = styled.ul`
  height: 90px;
  padding: 5px;
  display: none;
  background: transparent;
  border-radius: 3px;
  list-style: none;
  position: absolute;
  top: 38px;
  left: -30px;
  font-size: 1.6rem;

  li {
    width: 100%;
    height: 26px;
    padding-left: 10px;
    display: inline-flex;
    align-items: center;
    margin-bottom: 10px;
    &:hover {
      background: rgba(0, 0, 0, 0.1);
    }
  }
`

export const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`

export const Wrapper = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 20px;
  border-radius: 50%;
  cursor: pointer;
  position: absolute;
  right: 0;

  &:hover {
    ${Menu} {
      display: block;
    }
  }
`
