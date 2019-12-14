import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { logoutRequest } from '../../actions';
import userIcon from '../../assets/icon-user.png';
import exitIcon from '../../assets/exit-icon.png';
import gravatar from '../../utils/gravatar';
import { Wrapper, Image, Menu } from './styles';

const Avatar = (props) => {
  const { email } = props;

  const handleLogout = () => {
    props.logoutRequest({});
  };

  return (
    <Wrapper>
      <Image src={gravatar(email)} alt="User Avatar" />
      <Menu>
        <li>
          <img src={userIcon} alt="Icon that represent an user" />
          Account
        </li>
        <li onClick={handleLogout}>
          <img src={exitIcon} alt="Icon that represent the exit" />
          Logout
        </li>
      </Menu>
    </Wrapper>
  );
};

Avatar.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(null, mapDispatchToProps)(Avatar);
