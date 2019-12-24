import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { signupRequest } from '../../actions';
import {
  Wrapper,
  Container,
  Form,
  Input,
  Button,
  Register,
  Option,
  Line,
  StyledLink,
  BackButton,
  GoogleButton,
  TwitterButton,
} from './styles';

const Signup = (props) => {
  const [form, setForm] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.signupRequest(form);
    props.history.push('/');
  };

  return (
    <Wrapper>
      <StyledLink to="/">
        <BackButton />
      </StyledLink>
      <Container>
        <Option>
          <GoogleButton />
          <span>Continue with Google</span>
        </Option>
        <Option>
          <TwitterButton />
          <span>Continue with Twitter</span>
        </Option>
        <Line>
          <span>or</span>
        </Line>
        <Form onSubmit={handleSubmit}>
          <Input
            name="firstName"
            type="text"
            placeholder="First name"
            value={form.firstName}
            onChange={handleChange}
          />
          <Input
            name="lastName"
            type="text"
            placeholder="Last name"
            value={form.lastName}
            onChange={handleChange}
          />
          <Input
            name="email"
            type="email"
            placeholder="Email address"
            value={form.email}
            onChange={handleChange}
          />
          <Input
            name="password"
            type="password"
            placeholder="Create a password"
            value={form.password}
            onChange={handleChange}
          />
          <Button type="submit">Sing up</Button>
        </Form>
      </Container>
      <Register>
        <span>Already have an account?</span>
        <a href="/login">Log in</a>
      </Register>
    </Wrapper>
  );
};

Signup.propTypes = {
  signupRequest: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  signupRequest,
};

export default connect(null, mapDispatchToProps)(Signup);
