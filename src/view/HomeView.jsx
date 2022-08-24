import { HeaderHome } from 'components/Home/HeaderHome/HeaderHome';
import { getDatabase, ref, onValue } from 'firebase/database';
import { ItemList } from 'components/Home/Home/ItemList/ItemList';
// import { ToastContainer, toast } from 'react-toastify';
=======
import { useState } from 'react';
import { useEffect } from 'react';

export const HomeView = () => {
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

  return (
    <>
      <HeaderHome />
      {items && <ItemList item={items} />}
    </>
  );
};
