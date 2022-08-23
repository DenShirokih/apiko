import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { Field, Form } from 'formik';

export const ContainerForm = styled.div`
  width: 425px;
  height: 550px;
  background-color: #ffffff;
  margin-bottom: 20px;
  border-radius: 5px;
`;

export const FormStyled = styled(Form)`
  padding: 0px 24px;
`;

export const TitleDiv = styled.div`
  text-align: center;
  padding-top: 20px;
  margin-bottom: 25px;
`;

export const Title = styled.h2`
  font-size: 22px;
  font-weight: 400;
`;

export const Input = styled(Field)`
  width: 377px;
  height: 58px;
  background-color: #f9fafb;
  color: black;
  margin-bottom: 24px;
  border: 1px solid #dedee0;
  border-radius: 5px;
`;

export const DescriptionTitle = styled.h2`
  font-size: 12px;
  font-weight: 400;
  text-transform: uppercase;
  margin-bottom: 4px;
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
