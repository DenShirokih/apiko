import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from 'icons/logo/LogofullForm.svg';


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
  color: rgb(0,0,0);
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


