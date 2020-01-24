import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { registerUser } from '../actions'
import Form from '../components/Form'
import Input from '../components/Input'
import { Div, Button, RegisterBox } from './styles'

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
    <>
      <Div>
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
        <RegisterBox>
          <span>Already have an account?</span>
          <a href="/login">Log in</a>
        </RegisterBox>
      </Div>
    </>
  )
}

Signup.propTypes = {
  registerUser: PropTypes.func.isRequired,
}

const mapDispatchToProps = {
  registerUser,
}

export default connect(null, mapDispatchToProps)(Signup)
