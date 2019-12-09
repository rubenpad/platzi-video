import React from 'react';
import { Wrapper, Title, Row } from './styles';

const Category = ({ children }) => {
  return (
    <Wrapper>
      <Title>
        <h2>Category Title</h2>
      </Title>
      <Row>{children}</Row>
    </Wrapper>
  );
};

export default Category;
