import React from 'react';

import logo from '../../assets/logo-platzi-video.png';
import photo from '../../assets/profile.jpg';
import { HeaderWrapper, Logo, Profile, Avatar, Menu, Item } from './styles';

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo src={logo} alt="PlatziVideo Logo" />
      <Profile>
        <Avatar src={photo} alt="User Avatar" />
        <Menu>
          <Item>
            <a href="/">Account</a>
          </Item>
          <Item>
            <a href="/">Logout</a>
          </Item>
        </Menu>
      </Profile>
    </HeaderWrapper>
  );
};

export default Header;
