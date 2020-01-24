import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Avatar from '../Avatar'
import Logo from '../Logo'
import { StyledHeader } from './styles'

const Header = props => {
  const { user } = props
  const hasUser = Object.keys(user).length > 0

  return (
    <StyledHeader>
      <Link to="/">
        <Logo />
      </Link>
      {hasUser ? <Avatar email={user.email} /> : ''}
    </StyledHeader>
  )
}

Header.propTypes = {
  user: PropTypes.object.isRequired,
}

const mapStateToProps = state => {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps, null)(Header)
