import { useEffect } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
import { products } from 'redux/itemsSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

export const useGetAllItems = () => {
  const [items, setItems] = useState()
  const dispatch = useDispatch();
  useEffect(() => {
    const db = getDatabase();
    const getCards = ref(db, 'posts/');
    onValue(getCards, card => {
      const data = card.val();
      if (data) {
        const newArray = Object.values(data);
        setItems(newArray)
        dispatch(products(newArray));
      }
    });
  }, [dispatch]);

  return items
};
