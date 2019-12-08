import React from 'react';

import logo from '../../assets/logo-platzi-video.png';
import { Wrapper, Content, Logo, AuthButton } from './styles';

const Header = () => {
  return (
    <Wrapper>
      <Content>
        <Logo src={logo} alt="PlatziVideo Logo" />
        <AuthButton href="/login">Sign In</AuthButton>
      </Content>
    </Wrapper>
  );
};

export default Header;
