import React from 'react';

import { SearchWrapper, Title, Input } from './styles';

const Search = () => {
  return (
    <SearchWrapper>
      <Title>Watch movies anywhere</Title>
      <Input type="text" placeholder="Search..." />
    </SearchWrapper>
  );
};

export default Search;
