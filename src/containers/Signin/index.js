import React from 'react';
import { connect } from 'react-redux';

import { loginRequest } from '../../actions';
import useInputValue from '../../hooks/useInputValue';
import googleIcon from '../../assets/google-icon.svg';
import twitterIcon from '../../assets/twitter-icon.svg';
import backIcon from '../../assets/back-icon.png';
import {
  Wrapper,
  Container,
  Form,
  Input,
  Button,
  CheckBox,
  Register,
  Option,
  Line,
  SLink,
} from './styles';

const Signin = (props) => {
  const [form, setForm] = React.useState({ email: '' });
  const remember = useInputValue('checked');

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.loginRequest(form);
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
          <span>Login with Google</span>
        </Option>
        <Option>
          <img src={twitterIcon} alt="Google Icon" />
          <span>Login with Twitter</span>
        </Option>
        <Line>
          <span>or</span>
        </Line>
        <Form onSubmit={handleSubmit}>
          <Input
            name="email"
            type="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
          />
          <Input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
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
  );
};

const mapDispatchToProps = {
  loginRequest,
};

export default connect(null, mapDispatchToProps)(Signin);
