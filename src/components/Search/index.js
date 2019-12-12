import React from 'react';

import { SearchWrapper, Title, Input } from './styles';

const Search = () => {
  return (
    <SearchWrapper>
      <Title>Watch unlimited movies and videos. Anywhere and anytime.</Title>
      <Input type="text" placeholder="Search..." />
    </SearchWrapper>
  );
};

export default Search;
