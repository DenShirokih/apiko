import {
  Header,
  LinkItem,
  ApicoLogo,
  Container,
  UserName,
  UserMenu,
} from './AddProductHeader.styled';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/authSelectors';
import { LogOutButton } from 'components/LogOutButton/LogOutButton';

export const AddProductHeader = () => {
  const userName = useSelector(authSelectors.getUserName);
  const loggedIn = useSelector(authSelectors.getloggedIn);
  const getFirstLetters = () => {
    if(!userName){
      return
    }
    const matches = userName.match(/\b(\w)/g);
     const firstLetter = matches.join('');
     return firstLetter
  }

  return (
    <>
      <Header>
        <Container>
          <LinkItem to="/">
            <ApicoLogo />
          </LinkItem>
          <UserMenu>
            <UserName>{getFirstLetters()}</UserName>
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
