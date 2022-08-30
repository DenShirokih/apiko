import React, { useState } from 'react';
import { Formik } from 'formik';
import { setAuthToken, setUser } from 'redux/authSlice';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import {
  ContainerForm,
  TitleDiv,
  Title,
  DescriptionTitle,
  FormStyled,
  Button,
  Input,
  Register,
  Container,
  LinkRegister,
  Wrapper,
  BtnEye,
} from './LoginForm.styled';
import { IoEyeOutline, IoEyeOff } from 'react-icons/io5';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const schema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required(),
});

const values = {
  email: '',
  password: '',
};

export const LoginForm = () => {


  const [statePass, setStatePass] = useState(false);
  const toggleBtn = () => {
    setStatePass(prevState => !prevState);
  };
  const dispatch = useDispatch();
 
  const handleSubmit = ({ email, password }, { resetForm }) => {

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const userAut = userCredential.user;
        const name = userAut.displayName;
        dispatch(
          setUser({
            user: { name: name },
            id: userAut.uid,
          })
        );
        dispatch(setAuthToken(userAut.accessToken));
        toast.success(`Welcome ${name}`);
        resetForm();
      })
      .catch(error => {
        toast.error(error.message);
        console.log(error.code);
        console.log(error.message);
      });
  };

  return (
    <Formik
      initialValues={values}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Container>
        <ContainerForm>
          <TitleDiv>
            <Title>Login</Title>
          </TitleDiv>
          <Container>
            <ContainerForm>
              <FormStyled autoComplete="off">
                <label htmlFor="email">
                  <DescriptionTitle>email</DescriptionTitle>
                  <Input type="email" name="email" placeholder="Email..." />
                </label>
                <label htmlFor="password">
                  <DescriptionTitle>password</DescriptionTitle>
                  <Wrapper>
                    <Input
                      type={statePass ? 'text' : 'password'}
                      name="password"
                      placeholder="Password..."
                    />
                    <BtnEye type="button" onClick={toggleBtn}>
                      {statePass ? <IoEyeOff /> : <IoEyeOutline />}
                    </BtnEye>
                  </Wrapper>
                </label>
                <Button type="submit">Continue</Button>
              </FormStyled>
            </ContainerForm>
          </Container>
        </ContainerForm>
        <Register>
          <p>
            I have no account,{' '}
            <LinkRegister to="/register">register now</LinkRegister>
          </p>
        </Register>
      </Container>
    </Formik>
  );
};
