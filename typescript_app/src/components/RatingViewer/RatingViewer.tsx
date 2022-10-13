import React from 'react'
import { Star } from 'src/assets/icons/Star';
import Styled from './RatingViewer.styled';

export const RatingViewer: React.FC<{ starRating: string, title?: string }> = ({ starRating, title }) => {

  return (
    <Styled.Wrapper>
          <Star fill={parseInt(starRating) >= 1} title={title} />
          <Star fill={parseInt(starRating) >= 2} title={title} />
          <Star fill={parseInt(starRating) >= 3} title={title} />
          <Star fill={parseInt(starRating) >= 4} title={title} />
          <Star fill={parseInt(starRating) >= 5} title={title} />
    </Styled.Wrapper>
  )
};
