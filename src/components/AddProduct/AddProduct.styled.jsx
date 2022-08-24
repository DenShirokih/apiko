import styled from '@emotion/styled';
import { Form, Field } from 'formik';
import {ReactComponent as LogoUpload} from 'icons/plus-svgrepo-com.svg'

export const Background = styled.div`
  width: 1136px;
  height: 874px;
  margin: 0 auto;
  background-color: #ffffff;
  box-shadow: 0px, 2px rgba(0, 0, 0, 0.1112);
`;

export const Input = styled(Field)`
  width: 664px;
  height: 58px;
  border: 1px solid #dedee0;
  background-color: #f9fafb;
  border-radius: 10px;
  margin-bottom: 24px;
`;

export const Forma = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainTitle = styled.h2`
  font-size: 22px;
  color: #282828;
  font-weight: 400;
  margin-bottom: 24px;
  padding-top: 24px;
`;
export const TextArea = styled(Field)`
  width: 664px;
  height: 183px;
  border: 1px solid #dedee0;
  background-color: #f9fafb;
  border-radius: 10px;
  margin-bottom: 24px;
`;

export const Title = styled.p`
  text-transform: uppercase;
  font-size: 12px;
  margin-bottom: 4px;
`;

export const Button = styled.button`
  width: 664px;
  height: 58px;
  background-color: #349a89;
  border: none;
  border-radius: 10px;
  color: #ffffff;
  text-transform: uppercase;
`;
export const ImgDiv = styled.div`
  padding: 16px;
  width: 664px;
  height: 124px;
  background-color: #f9fafb;
  margin-bottom: 40px;
  border: 1px solid #dedee0;
  border-radius: 10px;
`;
export const InputAddImg = styled.input`
  opacity: 0;
    position: absolute;
    z-index: -1;
    overflow: hidden;
`;

export const Wrapped = styled.div`
   width: 92px;
  height: 92px;
  background-color: #e4e4e4;
  position: relative;
  border-radius: 10px;

`
export const Upload = styled(LogoUpload)`
position: absolute;
  fill:#349a89;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 42px;
  height: 42px;
  background-color: transparent;
`