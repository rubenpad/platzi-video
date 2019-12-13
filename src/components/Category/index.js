import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Title, Row } from './styles';

const Category = ({ children, title }) => {
  return (
    <Wrapper>
      <Title>
        <h2>{title}</h2>
      </Title>
      <Row>{children}</Row>
    </Wrapper>
  );
};

Category.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Category;
