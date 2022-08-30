import { removeUser } from 'redux/authSlice';
import { useDispatch } from 'react-redux';
import { getAuth, signOut } from 'firebase/auth';
import { BtnOut } from './LogOutButton.styled';
import { toast } from 'react-toastify';
import { useLocation, Navigate } from 'react-router-dom';
import { clearFavorites } from 'redux/authSlice';

export const LogOutButton = () => {
  const dispatch = useDispatch();
  const location = useLocation()
  
  const handleLogOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        dispatch(clearFavorites())
        toast.success('See you soon');
        <Navigate to="/" state={{ from: location }} />
      })
      .catch(error => {
        // An error happened.
        console.log(error);
      });
  };

  return <BtnOut onClick={() => handleLogOut()}>Log out</BtnOut>;
};
