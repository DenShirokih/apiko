import { HeaderHome } from 'components/Home/HeaderHome/HeaderHome';
import { ItemList } from 'components/Home/Home/ItemList/ItemList';
// import { ToastContainer, toast } from 'react-toastify';
import { useGetAllItems } from 'hooks/useGetAllItems';

export const HomeView = () => {
  const items = useGetAllItems()
  return (
    <>
      <HeaderHome />
      {items && <ItemList item={items} />}
    </>
  );
};
