import React from 'react';
import { FaAngleRight } from 'react-icons/fa';
import { TextBox, Title, Subtitle, Cta, TryButton } from './styles';
import { Wrapper } from '../Header/styles';

const Hero = () => {
  return (
    <Wrapper>
      <TextBox>
        <Title>Unlimited movies, TV shows, and more.</Title>
        <Subtitle>Watch anywhere. Cancel anytime.</Subtitle>
      </TextBox>
      <Cta>
        <TryButton href="/">
          <span>Try it now</span>
          <FaAngleRight />
        </TryButton>
      </Cta>
    </Wrapper>
  );
};

export default Hero;
