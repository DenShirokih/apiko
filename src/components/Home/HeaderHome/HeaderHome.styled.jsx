import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from 'icons/logo/LogofullHome.svg';
import { ReactComponent as FavoritesLogo } from 'icons/favorites.svg';

export const Header = styled.header`
  background: linear-gradient(180deg, #090810 0%, #171236 100%);
  margin-bottom: 15px;
`;

export const Container = styled.div`
  max-width: 1196px;
  margin: 0 auto;
  display: flex;
  padding: 30px;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    padding: 15px;
    max-width: 600px;
  }
`;

export const LoginDiv = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

export const LinkItem = styled(Link)`
  font-size: 12px;
  color: #ffffff;
  text-transform: uppercase;
  text-decoration: none;
  padding: 8px 35px;
  @media (max-width: 768px) {
    /* display: none; */
    padding: 8px 0;
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
`;
export const LinkDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const Add = styled.div`
  height: 30px;
  color: #ffffff;
  background-color: #349a89;
  justify-content: center;
  display: flex;
  align-items: center;
  margin-right: 30px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
