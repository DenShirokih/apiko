import styled from '@emotion/styled';
import { Field } from 'formik';

export const ImgDiv = styled.img`
  width: 100%;
  border-radius: 50%;
`;

export const Container = styled.div`
  display: flex;
  max-width: 855px;
  margin: auto;
  justify-content: space-between;
  padding: 0 40px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
  }
`;

export const WrapperImg = styled.div`
  flex-basis: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    margin-bottom: 25px;
    width: 70%;
  }
`;

export const WrapperForm = styled.div`
  flex-basis: 50%;
  background-color: #ffffff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    width: 70%;
  }
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
  margin-bottom: 40px;
  font-size: 16px;
`;
export const Title = styled.p`
  font-size: 15px;
  line-height: 14px;
  margin-top: 10px;
  margin-bottom: 15px;
`;
export const H1 = styled.h1`
  font-family: 'Helvetica';
  font-size: 20px;
  line-height: 25px;
  color: #282828;
  margin-top: 20px;
`;

export const BtnForm = styled.button`
  background: #22a69b;
  border-radius: 5px;
  border: solid transparent;
  width: 100%;
  height: 58px;
  font-size: 15px;

  margin-bottom: 20px;
  cursor: pointer;
  color: #ffffff;
  :hover {
    background-color: #59be6e;
  }
`;

export const Label = styled.label`
  background-color: #22a69b;
  padding: 10px 20px;
  font-size: 14px;
  color: rgb(255 255 255);
  border-radius: 4px;
  border: none;
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
  cursor: pointer;
  text-decoration: none;
  font-size: 14px;
  color: rgb(255 255 255);
  border-radius: 4px;
  background-color: #22a69b;
  padding: 12px 40px;
  box-sizing: border-box;
  border: none;
  transition: background-color 0.2s;
  :active {
    background-color: #59be6e;
  }
  :hover {
    background-color: #59be6e;
  }
`;

export const IMG = styled.img`
  width: 90%;
  border-radius: 50%;
  height: 320px;
  margin-bottom: 15px;
  @media (max-width: 768px) {
    height: 250px;
    width: 260px;
  }
`;
export const ButtonDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
