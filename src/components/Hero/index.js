import React from 'react';
import { TextBox, Title, Subtitle } from './styles';
import { Wrapper } from '../Header/styles';

const Hero = () => {
  return (
    <Wrapper>
      <TextBox>
        <Title>Unlimited movies, TV shows, and more.</Title>
        <Subtitle>Watch anywhere and anytime.</Subtitle>
      </TextBox>
    </Wrapper>
  );
};

export default Hero;
