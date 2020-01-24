import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { loginUser } from '../actions'
import Input from '../components/Input'
import Form from '../components/Form'
import { Div, Button, RegisterBox } from './styles'

const Login = props => {
  const [form, setForm] = React.useState({ email: '' })

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
    <>
      <Div>
        <Form onSubmit={handleSubmit}>
          <Input
            name="email"
            type="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required={true}
          />
          <Input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            required={true}
          />
          <Button type="submit">Login</Button>
        </Form>
        <RegisterBox>
          <span>Don&#39;t have an account</span>
          <a href="/signup">Sing up</a>
        </RegisterBox>
      </Div>
    </>
  )
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
}

const mapDispatchToProps = {
  loginUser,
}

export default connect(null, mapDispatchToProps)(Login)
