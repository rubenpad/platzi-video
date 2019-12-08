import React from 'react';
import useInputValue from '../../hooks/useInputValue';

import logo from '../../assets/logo-platzi-video.png';
import googleIcon from '../../assets/google-icon.svg';
import twitterIcon from '../../assets/twitter-icon.svg';
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
} from './styles';

const Login = () => {
  const email = useInputValue('');
  const password = useInputValue('');
  const remember = useInputValue('checked');

  return (
    <Wrapper>
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
        <Form>
          <Input
            type="email"
            placeholder="Email Address"
            value={email.value}
            onChange={email.onChange}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password.value}
            onChange={password.onChange}
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
        <a href="/">Sing up</a>
      </Register>
    </Wrapper>
  );
};

export default Login;
