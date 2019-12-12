import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Avatar from '../Avatar';
import logo from '../../assets/logo-platzi-video.png';
import { Wrapper, Logo, StyledLink } from './styles';

const Header = (props) => {
  const { user } = props;
  const hasUser = Object.keys(user).length > 0;

  return (
    <Wrapper>
      <Link to="/">
        <Logo src={logo} alt="PlatziVideo Logo" />
      </Link>
      {hasUser ? (
        <Avatar email={user.email} />
      ) : (
        <StyledLink to="/login">Log in</StyledLink>
      )}
    </Wrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, null)(Header);
