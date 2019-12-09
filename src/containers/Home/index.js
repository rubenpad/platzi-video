import React from 'react';

import { Container } from './styles';

import Header from '../../components/Header';
import Hero from '../../components/Hero';
import Category from '../../components/Category';
import Carousel from '../../components/Carousel';
import CarouselItem from '../../components/CarouselItem';

import cover from '../../assets/cover.jpg';

const Home = () => {
  return (
    <Container>
      <Header />
      <Hero />
      <Category>
        <Carousel>
          <CarouselItem
            title="Movie Title"
            cover={cover}
            year="2019"
            contentRating="16+"
            duration="145"
          />

          <CarouselItem
            title="Movie Title"
            cover={cover}
            year="2019"
            contentRating="16+"
            duration="145"
          />

          <CarouselItem
            title="Movie Title"
            cover={cover}
            year="2019"
            contentRating="16+"
            duration="145"
          />

          <CarouselItem
            title="Movie Title"
            cover={cover}
            year="2019"
            contentRating="16+"
            duration="145"
          />

          <CarouselItem
            title="Movie Title"
            cover={cover}
            year="2019"
            contentRating="16+"
            duration="145"
          />

          <CarouselItem
            title="Movie Title"
            cover={cover}
            year="2019"
            contentRating="16+"
            duration="145"
          />
        </Carousel>
      </Category>
    </Container>
  );
};

export default Home;
