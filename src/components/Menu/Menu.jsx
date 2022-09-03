import { StyledMenu } from './Menu.styled';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/authSelectors';
import { LogOutButton } from 'components/LogOutButton/LogOutButton';
import { Link } from 'react-router-dom';
import { UserStatus } from 'components/UserStatus/UserStatus';
import {  PositionUserStatus } from './Menu.styled';

const Menu = ({ open, setOpen }) => {
  const isLoggedIn = useSelector(authSelectors.getloggedIn);
  return (
    <StyledMenu open={open}>
      {isLoggedIn ? (
        <>
          <PositionUserStatus onClick={() => setOpen()}>
            <UserStatus />
          </PositionUserStatus>
          <Link to="/favorites" onClick={() => setOpen()}>
            Favorites
          </Link>
          <Link to="/add" onClick={() => setOpen()}>
            Add
          </Link>
          <LogOutButton />
        </>
      ) : (
        <>
          <Link to="/login" onClick={() => setOpen()}>
            Login
          </Link>
          <Link to="/register" onClick={() => setOpen()}>
            Register
          </Link>
        </>
      )}
    </StyledMenu>
  );
};
export default Menu;
