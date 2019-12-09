import styled from 'styled-components';
import { Item, Detail } from '../CarouselItem/styles';

export const Container = styled.div`
  margin: 70px 0;
  padding-bottom: 10px;
  white-space: nowrap;
  font-size: 0;
  transition: 0.45s all;

  &:hover {
    ${Item} {
      opacity: 0.3;

      &:hover {
        transform: scale(1.5);
        opacity: 1;

        ${Detail} {
          opacity: 1;
        }
      }

      &:hover ~ ${Item} {
        transform: translate3d(100px, 0, 0);
      }
    }
  }
`;
