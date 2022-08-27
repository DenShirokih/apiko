import { HeaderHome } from 'components/Home/HeaderHome/HeaderHome';
import { ItemList } from 'components/Home/Home/ItemList/ItemList';
import { useGetAllItems } from 'hooks/useGetAllItems';
import { Category } from 'components/Home/Category/Category';
import { useSelector } from 'react-redux';
import { itemsSelectors } from 'redux/itemsSelectors';

export const HomeView = () => {
  const filtredItems = useSelector(itemsSelectors.getFilter);
  console.log(filtredItems.length);
  const items = useGetAllItems();
  return (
    <>
      <HeaderHome />
      <Category />
      {filtredItems.length > 0 ? (
        <ItemList items={filtredItems} />
      ) : (
        <ItemList items={items} />
      )}
    </>
  );
};
