import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { logoutRequest } from '../../actions'
import gravatar from '../../utils/gravatar'
import { Wrapper, Image, Menu } from './styles'

const Avatar = props => {
  const { email } = props

  const handleLogout = () => {
    document.cookie = 'email='
    document.cookie = 'name='
    document.cookie = 'id='
    document.cookie = 'token='
    props.logoutRequest({})
    window.location.href = '/login'
  }

  return (
    <Wrapper>
      <Image src={gravatar(email)} alt="User Avatar" />
      <Menu>
        <li onClick={handleLogout}>Logout</li>
      </Menu>
    </Wrapper>
  )
}

Avatar.propTypes = {
  email: PropTypes.string.isRequired,
}

const mapDispatchToProps = {
  logoutRequest,
}

export default connect(null, mapDispatchToProps)(Avatar)
