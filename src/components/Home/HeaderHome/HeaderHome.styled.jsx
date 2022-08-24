import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from 'icons/logo/LogofullHome.svg';
import { ReactComponent as FavoritesLogo } from 'icons/favorites.svg';




export const Header = styled.header`
  background: linear-gradient(180deg, #090810 0%, #171236 100%);
  margin-bottom: 15px;
`;

export const Container = styled.div`
  max-width: 1096px;
  margin: 0 auto;
  display: flex;
  padding: 30px;
  justify-content: space-between;
  align-items: center;
`;

export const LinkItem = styled(Link)`
  font-size: 12px;
  color: #ffffff;
  text-transform: uppercase;
  text-decoration: none;
  :not(:last-child) {
    margin-right: 75px;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
`;
export const ApicoLogo = styled(Logo)`
  width: 100px;
  height: 50px;
`;

export const ContainerFilter = styled.div`
  max-width: 855px;
  margin: 0 auto;
`;
export const Favorites = styled(FavoritesLogo)`
  width: 20px;
  height: 20px;
`
export const LinkDiv = styled.div`
  display: flex;
  align-items: center;
`