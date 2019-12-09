import React from 'react';
import useInputValue from '../../hooks/useInputValue';

import googleIcon from '../../assets/google-icon.svg';
import twitterIcon from '../../assets/twitter-icon.svg';
import {
  Wrapper,
  Container,
  Form,
  Input,
  Button,
  Register,
  Option,
  Line,
} from './styles';

const Login = () => {
  const firstName = useInputValue('');
  const lastName = useInputValue('');
  const email = useInputValue('');
  const password = useInputValue('');

  return (
    <Wrapper>
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
        <Form>
          <Input
            type="text"
            placeholder="First name"
            value={firstName.value}
            onChange={firstName.onChange}
          />
          <Input
            type="text"
            placeholder="Last name"
            value={lastName.value}
            onChange={lastName.onChange}
          />
          <Input
            type="email"
            placeholder="Email address"
            value={email.value}
            onChange={email.onChange}
          />
          <Input
            type="password"
            placeholder="Create a password"
            value={password.value}
            onChange={password.onChange}
          />
          <Button type="submit">Sing up</Button>
        </Form>
      </Container>
      <Register>
        <span>Already have an account?</span>
        <a href="/">Log in</a>
      </Register>
    </Wrapper>
  );
};

export default Login;
