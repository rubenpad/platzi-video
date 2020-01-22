import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { registerUser } from '../../actions'
import {
  Wrapper,
  Container,
  Form,
  Input,
  Button,
  Register,
  StyledLink,
  BackButton,
} from './styles'

const Signup = props => {
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    password: '',
  })

  const handleChange = event => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    props.registerUser(form, '/signin')
  }

  return (
    <Wrapper>
      <StyledLink to="/">
        <BackButton />
      </StyledLink>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Input
            name="name"
            type="text"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <Input
            name="email"
            type="email"
            placeholder="Email address"
            value={form.email}
            onChange={handleChange}
            required
          />
          <Input
            name="password"
            type="password"
            placeholder="Create a password"
            value={form.password}
            onChange={handleChange}
            required
          />
          <Button type="submit">Sing up</Button>
        </Form>
      </Container>
      <Register>
        <span>Already have an account?</span>
        <a href="/login">Log in</a>
      </Register>
    </Wrapper>
  )
}

Signup.propTypes = {
  registerUser: PropTypes.func.isRequired,
}

const mapDispatchToProps = {
  registerUser,
}

export default connect(null, mapDispatchToProps)(Signup)
