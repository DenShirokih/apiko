import {
  Header,
  LinkItem,
  ApicoLogo,
  Favorites,
  Container,
  ContainerFilter,
  LinkDiv
} from './HeaderHome.styled';
import { Filter } from '../Filter/Filter';
import { LogOutButton } from 'components/LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/authSelectors';
import React from 'react';


export const HeaderHome = () => {
  const logged = useSelector(authSelectors.getloggedIn);
  return (
    <Header>
      <Container>
        <LinkItem to="/">
          <ApicoLogo />
        </LinkItem>
        <LinkDiv>
          <LinkItem to="/add">ADD</LinkItem>
          <LinkItem to="/favorites"><Favorites/></LinkItem>
          {logged ? <LogOutButton /> : <LinkItem to="/login">login</LinkItem>}
        </LinkDiv>
      </Container>
      <ContainerFilter>
        <Filter />
      </ContainerFilter>
    </Header>
  );
};
