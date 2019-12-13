import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

const Carousel = ({ children }) => {
  return <Container>{children}</Container>;
};

Carousel.propTypes = {
  children: PropTypes.array,
};

export default Carousel;
