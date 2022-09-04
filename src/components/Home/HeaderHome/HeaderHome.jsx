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
import { UserStatus } from 'components/UserStatus/UserStatus';
import { FormattedMessage } from 'react-intl'
import { SelectLanguage } from 'components/SelectLanguage/SelectLanguage';
import { BurgerMenu } from 'components/BurgerMenu/BurgerMenu';

export const HeaderHome = () => {
  const logged = useSelector(authSelectors.getloggedIn);
  let isPageWide = useMediaQuery('(max-width: 768px)');

  return (
    <Header>
      <Container>
        <LinkItem to="/">
          <ApicoLogo />
        </LinkItem>
      
        <LinkDiv>
          {logged ? (
            !isPageWide ? (
              <>
                <Add>
                  <LinkItem to="/add">
                  <FormattedMessage id='Add'/>
                  </LinkItem>
                </Add>
                <SelectLanguage/>
               
                <LinkItem to="/favorites">
                  <Favorites />
                </LinkItem>
                <UserStatus/>
                <LogOutButton />
              </>
            ) :  (<>
             <SelectLanguage/> 
             <BurgerMenu/>
            </>
           )
          ) : (
           <>
            <SelectLanguage/>
            <BurgerMenu/>
            <LoginDiv>
              <LinkItem to="/login">
                <FormattedMessage id='login'/>
                </LinkItem>
            </LoginDiv></>
          )}
        </LinkDiv>
        
      </Container>
      <ContainerFilter>
        <Filter />
      </ContainerFilter>
    </Header>
  );
};
