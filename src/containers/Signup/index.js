import React from 'react';
import { connect } from 'react-redux';

import { signupRequest } from '../../actions';
import googleIcon from '../../assets/google-icon.svg';
import twitterIcon from '../../assets/twitter-icon.svg';
import backIcon from '../../assets/back-icon.png';
import {
  Wrapper,
  Container,
  Form,
  Input,
  Button,
  Register,
  Option,
  Line,
  SLink,
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
      <SLink to="/">
        <img src={backIcon} alt="Back button" />
      </SLink>
      <Container>
        <Option>
          <img src={googleIcon} alt="Google Icon" />
          <span>Continue with Google</span>
        </Option>
        <Option>
          <img src={twitterIcon} alt="Google Icon" />
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

const mapDispatchToProps = {
  signupRequest,
};

export default connect(null, mapDispatchToProps)(Signup);
