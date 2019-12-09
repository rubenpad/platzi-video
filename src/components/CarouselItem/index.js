import React from 'react';

import { Item, Cover, Detail, Action } from './styles';
import playIcon from '../../assets/play-icon.png';
import addIcon from '../../assets/plus-icon.svg';

const CarouselItem = ({ title, cover, year, contentRating, duration }) => {
  return (
    <Item>
      <Cover src={cover} alt="Video Cover" />
      <Detail>
        <Action>
          <img src={playIcon} alt="Play Button" />
          <img src={addIcon} alt="Add Button" />
        </Action>
        <h3>{title}</h3>
        <p>{`${year} ${contentRating} ${duration}min`}</p>
      </Detail>
    </Item>
  );
};

export default CarouselItem;
