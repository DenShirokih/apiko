import { getAuth } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/authSelectors';
import {
  UserName,
  ImgUrl,
} from 'components/AddProduct/AddProductHeader/AddProductHeader.styled';

export const UserStatus = () => {
  const auth = getAuth();
  const userPhotoURL = auth.currentUser.photoURL;
  const userName = useSelector(authSelectors.getUserName);

  const getFirstLetters = () => {
    if (!userName) {
      return;
    }
    const matches = userName.match(/\b(\w)/g);
    const firstLetter = matches.join(' ');
    return firstLetter;
  };
  return (
    <>
      {userPhotoURL ? (
        <Link to="/personal">
          <ImgUrl src={userPhotoURL} alt="user photo" />
        </Link>
      ) : (
        <Link to="/personal">
          <UserName>{getFirstLetters()}</UserName>
        </Link>
      )}
    </>
  );
};
