import { HeaderHome } from 'components/Home/HeaderHome/HeaderHome';
import { getDatabase, ref, onValue } from 'firebase/database';
import { ItemList } from 'components/Home/Home/ItemList/ItemList';

export const HomeView = () => {
  const db = getDatabase();
  const getCards = ref(db, 'posts/');
  onValue(getCards, card => {
    const data = card.val();
    return data;
  });

  return (
    <>
      <HeaderHome />
      <ItemList />
    </>
  );
};
