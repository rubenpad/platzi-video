import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Avatar from '../Avatar';
import logo from '../../assets/logo-platzi-video.png';
import { Wrapper, Logo, StyledLink, Links } from './styles';

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
        <Links>
          <StyledLink to="/login" main="true">
            Log in
          </StyledLink>
          <StyledLink to="/signup">Sign up</StyledLink>
        </Links>
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
