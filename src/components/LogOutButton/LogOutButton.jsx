import { removeUser } from 'redux/authSlice';
import { useDispatch } from 'react-redux';
// import { useLogOutUserMutation } from 'redux/auth/authApi';
import { getAuth, signOut } from 'firebase/auth';
import { BtnOut } from './LogOutButton.styled';
import { toast } from 'react-toastify';

export const LogOutButton = () => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        toast.success('See you soon');
        console.log('user log out');
      })
      .catch(error => {
        // An error happened.
        console.log(error);
      });
  };

  return <BtnOut onClick={() => handleLogOut()}>Log out</BtnOut>;
};
