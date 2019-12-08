import React from 'react';

import Header from '../../components/Header';
import Hero from '../../components/Hero';
import { Container } from './styles';

const Home = () => {
  return (
    <Container>
      <Header />
      <Hero />
    </Container>
  );
};

export default Home;
