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
import { useMediaQuery } from 'hooks/useMediaQuery';
import { FormattedMessage } from 'react-intl';
import { BurgerMenu } from 'components/BurgerMenu/BurgerMenu';

export const AddProductHeader = () => {
  let isPageWide = useMediaQuery('(min-width: 769px)');
  const loggedIn = useSelector(authSelectors.getloggedIn);
  return (
    <>
      <Header>
        <Container>
          <LinkItem to="/">
            <ApicoLogo />
          </LinkItem>
          <UserMenu>
            {loggedIn ? (
              isPageWide ? (
                <>
                  <UserStatus />
                  <LogOutButton />
                </>
              ) : (
                <BurgerMenu />
              )
            ) : (
              <LinkItem to="/login">
                <FormattedMessage id="login" />
              </LinkItem>
            )}
          </UserMenu>
        </Container>
      </Header>
    </>
  );
};
