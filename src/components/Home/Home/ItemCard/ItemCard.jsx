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
  ActiveLogoLike,
} from './ItemCard.styled';
import { getDatabase, ref, set } from 'firebase/database';
import { authSelectors } from 'redux/authSelectors';
import { useSelector, useDispatch } from 'react-redux';
import { setFavorites } from 'redux/authSlice';

export const ItemCard = ({ title, location, price, photo, id }) => {
  const isLoggerIn = useSelector(authSelectors.getloggedIn);
  const uid = useSelector(authSelectors.getId);
  const favorites = useSelector(authSelectors.getFavorites);
  const dispatch = useDispatch();
  const isChoosen = favorites.flatMap(item => item.id).includes(id);

  const favoritesCardsId = id => {
    const db = getDatabase();
    const postListIdRef = ref(db, `favorites/users/` + uid);

    if (isChoosen) {
      const deleteFavorites = favorites.filter(item => item.id !== id);
      dispatch(setFavorites(deleteFavorites));
      set(postListIdRef, deleteFavorites);
    } else {
      const addFavorites = favorites.map(item => item);
      addFavorites.push({ id: id });
      dispatch(setFavorites(addFavorites));
      set(postListIdRef, addFavorites);
    }
  };

  return (
    <ItemWrapper>
      <ImgWrapper>
        <ImgItem src={photo} alt={title} />
        <Like>
          <Label>
            {isLoggerIn && (
              <LikeButton
                type="checkbox"
                onClick={() => favoritesCardsId(id)}
              />
            )}

            {isChoosen ? <ActiveLogoLike /> : <LikeLogo />}
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
