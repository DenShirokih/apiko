import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getDatabase, ref, onValue } from 'firebase/database';
import { authSelectors } from 'redux/authSelectors';

export const useGetFavoritesItems = () => {
  const uid = useSelector(authSelectors.getId);
  const [items, setItem] = useState([]);

  useEffect(() => {
    const db = getDatabase();
    const getCards = ref(db, `favorites/users/${uid}`);
    onValue(getCards, card => {
      const data = card.val();
      if (data) {
        const newArray = Object.values(data);
        setItem(newArray);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return items;
};
