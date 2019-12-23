import React from 'react';
import PropTypes from 'prop-types';
import { FaUserAlt, FaArrowLeft } from 'react-icons/fa';
import { connect } from 'react-redux';

import { logoutRequest } from '../../actions';
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
          <FaUserAlt />
          Account
        </li>
        <li onClick={handleLogout}>
          <FaArrowLeft />
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
