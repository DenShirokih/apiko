import { StyledMenu } from './Menu.styled';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/authSelectors';
import { LogOutButton } from 'components/LogOutButton/LogOutButton';
import { Link } from 'react-router-dom';

const Menu = ({ open, setOpen }) => {
  const isLoggedIn = useSelector(authSelectors.getloggedIn);
  return (
    <StyledMenu open={open}>
      {isLoggedIn && open ? (
        <>
          <LogOutButton />
          <Link to="/favorites">Favorites</Link>
        </>
      ) : (
        <>
          <Link to="/login" onClick={ ()=>setOpen()}>Login</Link>
          <Link to="/register" onClick={ ()=>setOpen()}>Register</Link>
        </>
      )}
    </StyledMenu>
  );
};
export default Menu;
