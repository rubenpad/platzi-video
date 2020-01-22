import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { loginUser } from '../../actions'
import useInputValue from '../../hooks/useInputValue'
import {
  Wrapper,
  Container,
  Form,
  Input,
  Button,
  CheckBox,
  Register,
  StyledLink,
  BackButton,
} from './styles'

const Login = props => {
  const [form, setForm] = React.useState({ email: '' })
  const remember = useInputValue('checked')

  const handleChange = event => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    props.loginUser(form, '/')
  }

  return (
    <Wrapper>
      <StyledLink to="/">
        <BackButton />
      </StyledLink>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Input
            name="email"
            type="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
          />
          <Input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />
          <CheckBox>
            <input
              type="checkbox"
              name="remember"
              value={remember.value}
              onChange={remember.onChange}
            />
            <span>Remember me</span>
            <a href="/reset">Forgot password?</a>
          </CheckBox>
          <Button type="submit">Log In</Button>
        </Form>
      </Container>
      <Register>
        <span>Don&#39;t have an account</span>
        <a href="/signup">Sing up</a>
      </Register>
    </Wrapper>
  )
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
}

const mapDispatchToProps = {
  loginUser,
}

export default connect(null, mapDispatchToProps)(Login)
