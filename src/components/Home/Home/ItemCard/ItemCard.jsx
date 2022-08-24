import {
  ItemWrapper,
  ImgItem,
  ItemDiscriptions,
  ItemTitle,
  ImgWrapper,
  ItemPrice,
  ItemLocation,
  Like,
  LikeButton,
  LikeLogo,
} from './ItemCard.styled';

import { useState } from 'react';

export const ItemCard = ({ title, location, price, photo }) => {
  const [value, setValue] = useState(false);

  const toggle = e => {
    setValue(prev => !prev);
  };

  console.log(value);

  return (
    <ItemWrapper>
      <ImgWrapper>
        <ImgItem src={photo} alt={title} />
        <Like>
          <label>
            <LikeButton
              type="checkbox"
              checked={value}
              onChange={e => toggle(e)}
            />
            <LikeLogo />
          </label>
        </Like>
      </ImgWrapper>
      <ItemDiscriptions>
        <ItemTitle>{title}</ItemTitle>
        <ItemPrice>${price}</ItemPrice>
        <ItemLocation>{location}</ItemLocation>
      </ItemDiscriptions>
    </ItemWrapper>
  );
};
