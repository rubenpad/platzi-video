import React from 'react';

import { SearchWrapper, Title, Input } from './styles';

const Search = () => {
  return (
    <SearchWrapper>
      <Title>Search your favorite movie or video</Title>
      <Input type="text" placeholder="Search..." />
    </SearchWrapper>
  );
};

export default Search;
