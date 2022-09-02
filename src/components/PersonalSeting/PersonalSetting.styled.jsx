import styled from '@emotion/styled';
import profileImg from 'icons/profileTemplate.png';
import { Field } from 'formik';

export const ImgDiv = styled.div`
  width: 343px;
  height: 320px;
  background-image: url(${profileImg});
  background-repeat: repeat;
`;
export const Container = styled.div`
  display: flex;
  width: 855px;
  margin: auto;
`;

export const WrapperImg = styled.div`
  width: 40%;
  margin-right: 5%;
  background-color: #ffffff;
`;

export const WrapperForm = styled.div`
  padding: 0 25px;
  width: 50%;
  background-color: #ffffff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Input = styled(Field)`
  width: 100%;
  height: 58px;
  border-radius: 5px;
  border: 1px solid #dedee0;
  background-color: #f2f2f2;
  padding-left: 15px;
  font-size: 16px;
`;
export const Title = styled.p`
  font-size: 15px;
  line-height: 14px;
  margin-top: 10px;
  margin-bottom: 10px;
`;
export const H1 = styled.h1`
  font-family: 'Helvetica';
  font-size: 20px;
  line-height: 25px;
  color: #282828;
  margin-top: 10px;
`;

export const BtnForm = styled.button`
  background: #349a89;
  border-radius: 5px;
  border: solid transparent;
  width: 377px;
  height: 58px;
  font-size: 15px;
  margin-top: 25px;
  margin-bottom: 20px;
  cursor: pointer;
  color: #ffffff;
`;
