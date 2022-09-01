import {
  Header,
  LinkItem,
  ApicoLogo,
  Favorites,
  Container,
  ContainerFilter,
  LinkDiv,
  Add,
  LoginDiv,
} from './HeaderHome.styled';
import { Filter } from '../Filter/Filter';
import { LogOutButton } from 'components/LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/authSelectors';
import React from 'react';
import { useMediaQuery } from 'hooks/useMediaQuery';

export const HeaderHome = () => {
  const logged = useSelector(authSelectors.getloggedIn);
  let isPageWide = useMediaQuery('(min-width: 769px)');

  return (
    <Header>
      <Container>
        <LinkItem to="/">
          <ApicoLogo />
        </LinkItem>
        <LinkDiv>
          {logged ? (
            isPageWide && (
              <>
                <Add>
                  <LinkItem to="/add">+ ADD</LinkItem>
                </Add>
                <LinkItem to="/favorites">
                  <Favorites />
                </LinkItem>
                <LogOutButton />
              </>
            )
          ) : (
            <LoginDiv>
              <LinkItem to="/login">login</LinkItem>
            </LoginDiv>
          )}
        </LinkDiv>
      </Container>
      <ContainerFilter>
        <Filter />
      </ContainerFilter>
    </Header>
  );
};
