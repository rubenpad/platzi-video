import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Header from '../../components/Header';
import Search from '../../components/Search';
import Category from '../../components/Category';
import Carousel from '../../components/Carousel';
import CarouselItem from '../../components/CarouselItem';

const Home = ({ library, trends, originals }) => {
  return (
    <>
      <Header />
      <Search />
      {library.length > 0 && (
        <Category title="Library">
          <Carousel>
            {library.map((item) => {
              console.log(item);
              const { id, title, year, cover, contentRating, duration } = item;
              return (
                <CarouselItem
                  isLibrary
                  key={id}
                  id={id}
                  title={title}
                  year={year}
                  cover={cover}
                  contentRating={contentRating}
                  duration={duration}
                />
              );
            })}
          </Carousel>
        </Category>
      )}

      {trends.length > 0 && (
        <Category title="Trends">
          <Carousel>
            {trends.map((item) => {
              const { id, title, year, cover, contentRating, duration } = item;
              return (
                <CarouselItem
                  key={id}
                  id={id}
                  title={title}
                  year={year}
                  cover={cover}
                  contentRating={contentRating}
                  duration={duration}
                />
              );
            })}
          </Carousel>
        </Category>
      )}

      {originals.length > 0 && (
        <Category title="Originals">
          <Carousel>
            {originals.map((item) => {
              const { id, title, year, cover, contentRating, duration } = item;
              return (
                <CarouselItem
                  key={id}
                  id={id}
                  title={title}
                  year={year}
                  cover={cover}
                  contentRating={contentRating}
                  duration={duration}
                />
              );
            })}
          </Carousel>
        </Category>
      )}
    </>
  );
};

Home.propTypes = {
  library: PropTypes.array,
  trends: PropTypes.array,
  originals: PropTypes.array,
};

const mapStateToProps = (state) => {
  return {
    search: state.search,
    library: state.library,
    trends: state.trends,
    originals: state.originals,
  };
};

export default connect(mapStateToProps, null)(Home);
