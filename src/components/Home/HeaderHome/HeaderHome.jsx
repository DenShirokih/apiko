import {
  Header,
  LinkItem,
  ApicoLogo,
  Button,
  Container,
  ContainerFilter,
  BtnOut,
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
        <div>
          <LinkItem to="/add">ADD</LinkItem>
          {logged ? <LogOutButton /> : <LinkItem to="/login">login</LinkItem>}
        </div>
      </Container>
      <ContainerFilter>
        <Filter />
      </ContainerFilter>
    </Header>
  );
};
