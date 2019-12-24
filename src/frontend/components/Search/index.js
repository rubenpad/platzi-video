import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Results from '../Results';
import { SearchWrapper, Title, Input } from './styles';

const Search = (props) => {
  const { trends, originals } = props;
  const videos = trends.concat(originals);

  const [filteredList, setFilteredList] = React.useState([]);
  const [query, setQuery] = React.useState('');
  const onChange = (event) => {
    setQuery(event.target.value);

    const result = videos.filter((item) => {
      return item.title.toLowerCase().includes(query.toLowerCase());
    });

    setFilteredList(result);
  };

  return (
    <SearchWrapper>
      <Title>Watch unlimited movies and videos. Anywhere and anytime.</Title>
      <Input
        autoComplete="off"
        name="query"
        type="text"
        placeholder="Search..."
        value={query}
        onChange={onChange}
      />
      <Results query={query} results={filteredList} />
    </SearchWrapper>
  );
};

Search.propTypes = {
  trends: PropTypes.array,
  originals: PropTypes.array,
};

const mapStateToProps = (state) => {
  return {
    trends: state.trends,
    originals: state.originals,
  };
};

export default connect(mapStateToProps, null)(Search);
