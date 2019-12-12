import React from 'react';
import { connect } from 'react-redux';

import Search from '../../components/Search';
import Category from '../../components/Category';
import Carousel from '../../components/Carousel';
import CarouselItem from '../../components/CarouselItem';

const Home = ({ library, trends, originals }) => {
  return (
    <>
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

const mapStateToProps = (state) => {
  return {
    library: state.library,
    trends: state.trends,
    originals: state.originals,
  };
};

export default connect(mapStateToProps, null)(Home);
