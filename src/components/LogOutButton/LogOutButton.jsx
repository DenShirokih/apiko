import { removeUser } from 'redux/authSlice';
import { useDispatch } from 'react-redux';
// import { useLogOutUserMutation } from 'redux/auth/authApi';
import { getAuth, signOut } from 'firebase/auth';

export const LogOutButton = () => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        console.log('user log out');
      })
      .catch(error => {
        // An error happened.
        console.log(error);
      });
  };

  return (
    <div>
      <button onClick={() => handleLogOut()}>Log out</button>
    </div>
  );
};
