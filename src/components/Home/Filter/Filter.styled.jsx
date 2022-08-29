import styled from '@emotion/styled';
import { Form, Field } from 'formik';
import {ReactComponent as Logo} from 'icons/search_icon.svg'
import {ReactComponent as Location} from 'icons/location.svg'

export const BtnClearInput = styled.button`
  background-color: transparent;
  top: 10px;
  right: 400px;
  position: absolute;
  border: none;
  font-size: 30px;
  cursor: pointer;
`;

export const InputWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
`
export const Forma = styled(Form)`
  padding-bottom: 14px;
`;
export const Input = styled(Field)`
  height: 50px;
  width: 465px;
  margin-right: 7px;
  font-size: 18px;
  padding-left: 40px;
  border-radius: 5px;
`;

export const Button = styled.button`
  height: 50px;
  width: 175px;
  background-color: #3e3961;
  color: #ffffff;
  text-transform: uppercase;
`;

export const SearchLogo = styled(Logo)`
position: absolute;
top: 15px;
left: 14px;
  width: 20px;
  height: 20px;
`
export const LocationLoge = styled(Location)`
  width: 25px;
  height: 25px;
  position: absolute;
  right: 350px;
  top: 10;
  z-index: 500;
`
