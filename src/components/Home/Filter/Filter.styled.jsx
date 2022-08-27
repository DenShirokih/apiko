import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const BtnClearInput = styled.button`
  background-color: transparent;
  top: 138px;
  left: 950px;
  position: absolute;
  border: none;
  font-size: 30px;
  cursor: pointer;
`;

export const Forma = styled(Form)`
  padding-bottom: 14px;
`;
export const Input = styled(Field)`
  position: relative;
  height: 50px;
  width: 465px;
  margin-right: 7px;
  font-size: 18px;
  padding-left: 15px;
`;
export const Select = styled.select`
  height: 50px;
  width: 200px;
  margin-right: 7px;
`;

export const Button = styled.button`
  height: 50px;
  width: 175px;
  background-color: #3e3961;
  color: #ffffff;
  text-transform: uppercase;
`;
