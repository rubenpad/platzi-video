import React from 'react';

import { GlobalStyle } from '../GlobalStyle';
import Header from '../components/Header';
import Search from '../components/Search';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Search />
    </>
  );
};

export default App;
