import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from 'icons/logo/LogofullHome.svg';

export const Header = styled.header`
  margin-bottom: 34px;
  background: linear-gradient(180deg, #090810 0%, #171236 100%);
`;

export const Container = styled.div`
  height: 77px;
  max-width: 1096px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1100px) {
    padding: 0 15px;
  }
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
export const UserName = styled.div`
  height: 40px;
  width: 40px;
  background-color: #f1c40f;
  border-radius: 50%;
  margin-right: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;
  list-style: none;
`;
export const UserMenu = styled.div`
  display: flex;
  align-items: center;
`;

export const ImgUrl = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin-right: 35px;
`;
