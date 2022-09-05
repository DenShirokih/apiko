import { HeaderHome } from 'components/Home/HeaderHome/HeaderHome';
import { ItemList } from 'components/Home/Home/ItemList/ItemList';
import { useGetAllItems } from 'hooks/useGetAllItems';
import { Category } from 'components/Home/Category/Category';
import { useGetFavoritesItems } from 'hooks/useGetFavoritesItems';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { setUser } from 'redux/authSlice';


export const HomeView = () => {
  const dispatch = useDispatch()
  useGetAllItems();
  useGetFavoritesItems()
  const auth = getAuth();
  
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      dispatch(setUser({
        user: { name: user.name, email: user.email },
        id: uid,
      }))
    } else {
    }
  });

  
  return (
    <>
      <HeaderHome />
      <Category />
      <ItemList />
    </>
  );
};
