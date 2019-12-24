import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Item, SLink } from './styles';

const Results = (props) => {
  const { query, results } = props;
  return (
    <>
      {query.length ? (
        <Wrapper>
          <ul>
            {results.map((item) => {
              const { id, title } = item;
              return (
                <Item key={id}>
                  <SLink to={`/player/${id}`}>{title}</SLink>
                </Item>
              );
            })}
          </ul>
        </Wrapper>
      ) : null}
    </>
  );
};

Results.propTypes = {
  query: PropTypes.string,
  results: PropTypes.array.isRequired,
};

export default Results;
