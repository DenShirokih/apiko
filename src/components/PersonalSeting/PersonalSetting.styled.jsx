import styled from '@emotion/styled';
// import profileImg from 'icons/profileTemplate.png';

import { Field } from 'formik';

export const ImgDiv = styled.img`
  width: 100%;
  border-radius: 50%;
`;

export const Container = styled.div`
  display: flex;
  max-width: 855px;
  margin: auto;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin: auto;
  }
`;

export const WrapperImg = styled.div`
  width: 40%;
  margin-right: 3%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 768px) {
    margin-bottom: 15px;
    margin: 0;
  }
`;

export const WrapperForm = styled.div`
  padding: 0 3%;
  width: 50%;
  background-color: #ffffff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ContentDiv = styled.div`
  width: 90%;
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
  background: #22a69b;
  border-radius: 5px;
  border: solid transparent;
  width: 100%;
  height: 58px;
  font-size: 15px;
  margin-top: 25px;
  margin-bottom: 20px;
  cursor: pointer;
  color: #ffffff;
  :hover {
    background-color: #59be6e;
  }
`;

export const Label = styled.label`
  position: relative;
  display: inline-block;
`;
export const Span = styled.span`
  position: relative;
  display: inline-block;
  cursor: pointer;
  outline: none;
  text-decoration: none;
  font-size: 14px;
  vertical-align: middle;
  color: rgb(255 255 255);
  text-align: center;
  border-radius: 4px;
  background-color: #22a69b;
  line-height: 22px;
  height: 40px;
  padding: 10px 20px;
  box-sizing: border-box;
  border: none;
  margin-left: 40px;
  margin-top: 10px;
  transition: background-color 0.2s;
  :active {
    background-color: #59be6e;
  }
  :hover {
    background-color: #59be6e;
  }
`;
export const ChooseBtn = styled.input`
  position: absolute;
  z-index: -1;
  opacity: 0;
  display: block;
  width: 0;
  height: 0;
  :focus {
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
`;
export const BtnReset = styled.button`
  position: relative;
  display: inline-block;
  cursor: pointer;
  outline: none;
  text-decoration: none;
  font-size: 14px;
  vertical-align: middle;
  color: rgb(255 255 255);
  text-align: center;
  border-radius: 4px;
  background-color: #22a69b;
  line-height: 22px;
  height: 40px;
  padding: 10px 40px;
  box-sizing: border-box;
  border: none;
  margin-left: 30px;
  margin-top: 10px;
  transition: background-color 0.2s;
  :active {
    background-color: #59be6e;
  }
  :hover {
    background-color: #59be6e;
  }
`;

export const IMG = styled.img`
  width: 100%;
  border-radius: 50%;
`;
export const ButtonDiv = styled.div`
  width: 100%;
`;
