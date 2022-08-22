import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  margin: 0 auto;
  width: 425px;
`;

export const ContainerForm = styled.div`
  width: 425px;
  height: 365px;
  background-color: #ffffff;
  margin-bottom: 21px;
  border-radius: 5px;
`;

export const Form = styled.form`
  padding: 0px 24px;
`;

export const TitleDiv = styled.div`
  text-align: center;
  padding-top: 25px;
  margin-bottom: 32px;
`;
export const Input = styled.input`
  width: 377px;
  height: 58px;
  color: black;
  background-color: #f9fafb;

  margin-bottom: 30px;
  border: 1px solid #dedee0;
  border-radius: 5px;
`;
export const Title = styled.h2`
  font-size: 24px;
  font-weight: 400;
`;
export const DescriptionTitle = styled.h2`
  font-size: 12px;
  font-weight: 400;
  text-transform: uppercase;
`;
export const Button = styled.button`
  width: 377px;
  height: 58px;
  background-color: #349a89;
  color: #ffffffff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
`;

export const Register = styled.div`
  width: 425px;
  height: 76px;
  background-color: #f9fafb;
  border: none;
  border-radius: 5px;
  color: rgb(0, 0, 0);
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LinkRegister = styled(Link)`
  color: #349a89;
  text-transform: uppercase;
  cursor: pointer;
  text-decoration: none;
`;
