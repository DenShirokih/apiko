import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getDatabase, ref, onValue } from 'firebase/database';
import { authSelectors } from 'redux/authSelectors';
import { useDispatch } from 'react-redux';
import { setFavorites } from 'redux/authSlice';

export const useGetFavoritesItems = () => {
  const uid = useSelector(authSelectors.getId);
  const [items, setItem] = useState([]);
  const [keys, setKeys] = useState([])
  const [data, setData] =useState(null)
  const dispatch = useDispatch()

  useEffect(() => {
    const db = getDatabase();
    const getCards = ref(db, `favorites/users/${uid}`);
    onValue(getCards, card => {
      const data = card.val();
      if (data) {
        const keys = Object.keys(data)
        setKeys(keys)
        const newArray = Object.values(data);
        setItem(newArray);
        setData(data)
        const  favorites = Object.keys(data).flatMap(key => ({
          ...data[key],
          // productId: key,
        }))
        dispatch(setFavorites(favorites))
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {items, keys, data}
};
