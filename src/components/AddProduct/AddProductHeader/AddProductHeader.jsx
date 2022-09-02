/* eslint-disable jsx-a11y/img-redundant-alt */
import {
  Header,
  LinkItem,
  ApicoLogo,
  Container,
  UserMenu,
} from './AddProductHeader.styled';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/authSelectors';
import { LogOutButton } from 'components/LogOutButton/LogOutButton';
import { UserStatus } from 'components/UserStatus/UserStatus';


export const AddProductHeader = () => {
  const loggedIn = useSelector(authSelectors.getloggedIn);
  return (
    <>
      <Header>
        <Container>
          <LinkItem to="/">
            <ApicoLogo />
          </LinkItem>
          <UserMenu>
           <UserStatus/>
            {loggedIn ? (
              <LogOutButton />
            ) : (
              <LinkItem to="/login">login</LinkItem>
            )}
          </UserMenu>
        </Container>
      </Header>
    </>
  );
};
