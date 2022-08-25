import { useEffect, useState } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';

export const useGetAllItems = () => {
  const [items, setItem] = useState([]);
  useEffect(() => {
    const db = getDatabase();
    const getCards = ref(db, 'posts/');
    onValue(getCards, card => {
      const data = card.val();
      if (data) {
        const newArray = Object.values(data);
        setItem(newArray);
      }
    });
  }, []);

  return items;
};
