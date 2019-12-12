import React from 'react';

import userIcon from '../../assets/icon-user.png';
import exitIcon from '../../assets/exit-icon.png';
import gravatar from '../../utils/gravatar';
import { Wrapper, Image, Menu } from './styles';

const Avatar = (email) => {
  return (
    <Wrapper>
      <Image src={gravatar(email)} alt="User Avatar" />
      <Menu>
        <li>
          <img src={userIcon} alt="Icon that represent an user" />
          Account
        </li>
        <li>
          <img src={exitIcon} alt="Icon that represent the exit" />
          Logout
        </li>
      </Menu>
    </Wrapper>
  );
};

export default Avatar;
