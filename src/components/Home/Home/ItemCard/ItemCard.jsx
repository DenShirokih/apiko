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
  Label,
} from './ItemCard.styled';
import { useState } from 'react';
import { getDatabase, ref, set, push, remove } from 'firebase/database';
import { authSelectors } from 'redux/authSelectors';
import { useSelector } from 'react-redux';
import { useGetFavoritesItems } from 'hooks/useGetFavoritesItems';

export const ItemCard = ({ title, location, price, photo, id }) => {
  const [value, setValue] = useState(false);
  const uid = useSelector(authSelectors.getId);
  const { array } = useGetFavoritesItems();


  const favoritesCardsId = id => {
    const db = getDatabase();
    const postListIdRef = ref(db, `favorites/users/` + uid);

    if (value) {
      for (let i = 0; i <= array.length; i++) {
        if (array[i][1].id === id) {
          const key = array[i][0]
          const delListIdRef = ref(db, `favorites/users/${uid}/${key}`);
          remove(delListIdRef)
          return;
        }
      }
    } else {
      const newPostIdRef = push(postListIdRef);
      set(newPostIdRef, {
        id: id,
      });
    }
  };

  const toggle = id => {
    setValue(prev => !prev);
    favoritesCardsId(id);
  };

console.log(value)

  return (
    <ItemWrapper>
      <ImgWrapper>
        <ImgItem src={photo} alt={title} />
        <Like>
          <Label>
            <LikeButton
              type="checkbox"
              checked={value}
              onChange={() => toggle(id)}
            />
            <LikeLogo />
          </Label>
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
