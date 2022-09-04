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
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
    height: 150px;
    max-width: 350px;
  margin: 0 auto;
  }
  
`
export const Forma = styled(Form)`
  padding-bottom: 14px;
`;

export const Input = styled(Field)`
  height: 50px;
  flex-basis: 56%;
  font-size: 16px;
  padding-left: 45px;
  border-radius: 5px;
  @media (max-width: 768px) {
    flex-basis: 30%;
    width: 100%;
  }
`;

export const Button = styled.button`
  height: 50px;
  flex-basis: 20%;
  background-color: #3e3961;
  color: #ffffff;
  text-transform: uppercase;
  border: none;
  border-radius: 10px;
  @media (max-width: 768px) {
    width: 100%;
    flex-basis: 30%;
  }
`;

export const SearchLogo = styled(Logo)`
position: absolute;
top: 15px;
left: 15px;
  width: 20px;
  height: 20px;
  @media (max-width: 768px) {
    top: 13px;
  }
`
export const LocationLoge = styled(Location)`
  width: 25px;
  height: 25px;
  position: absolute;
  z-index: 500;
  left: 5px;
  top: 10px;
  @media (max-width: 768px) {
    top: 6px;
    left: 15px;
  }
`
export const SvgContainer = styled.div`
  position: relative;
  @media (max-width: 768px) {
    width: 100%;
  }
`