import { HeaderHome } from 'components/Home/HeaderHome/HeaderHome';
import { ItemList } from 'components/Home/Home/ItemList/ItemList';
import { useGetAllItems } from 'hooks/useGetAllItems';
import { Category } from 'components/Home/Category/Category';

export const HomeView = () => {
  const items = useGetAllItems()
  return (
    <>
      <HeaderHome />
      <Category/>
      {items && <ItemList items={items} />}
    </>
  );
};
