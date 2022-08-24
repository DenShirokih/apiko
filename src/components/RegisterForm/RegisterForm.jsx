import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { updateProfile } from 'firebase/auth';
import { Container } from 'components/LogInForm/LoginForm.styled';
import { Formik } from 'formik';
import { setAuthToken, setUser } from 'redux/authSlice';
import * as yup from 'yup';
import React, { useState } from 'react';
import { IoEyeOutline, IoEyeOff } from 'react-icons/io5';
import {
  ContainerForm,
  TitleDiv,
  Title,
  DescriptionTitle,
  Input,
  Button,
  Register,
  LinkRegister,
  FormStyled,
  Wrapper,
  BtnEye,
} from './RegisterForm.styled';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required(),
  password: yup.string().required(),
});

const values = {
  name: '',
  email: '',
  password: '',
};

export const RegisterForm = () => {
  const [statePass, setStatePass] = useState(false);
  const toggleBtn = () => {
    setStatePass(prevState => !prevState);
  };
  const dispatch = useDispatch();

  const handleSubmit = ({ name, email, password }, { resetForm }) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        updateProfile(userCredential.user, { displayName: name });
        toast.success(`Welcome, ${name}`);
        dispatch(
          setUser({
            user: { email: email, name: name },
            id: userCredential.user.uid,
          })
        );
        dispatch(setAuthToken(userCredential.user.accessToken));
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
            <Title>Register</Title>
          </TitleDiv>
          <FormStyled autoComplete="off">
            <label htmlFor="email">
              <DescriptionTitle>email</DescriptionTitle>
              <Input type="email" name="email" placeholder="Email..." />
            </label>
            <label htmlFor="name">
              <DescriptionTitle>full name</DescriptionTitle>
              <Input type="text" name="name" placeholder="name..." />
            </label>
            <label htmlFor="password">
              <DescriptionTitle>password</DescriptionTitle>
              <Wrapper>
                <Input
                  type={statePass ? 'text' : 'password'}
                  name="password"
                  placeholder="Password..."
                />

                <BtnEye onClick={toggleBtn}>
                  {statePass ? <IoEyeOff /> : <IoEyeOutline />}
                </BtnEye>
              </Wrapper>
            </label>
            <label htmlFor="password">
              <DescriptionTitle>repeat password</DescriptionTitle>
              <Wrapper>
                <Input
                  type={statePass ? 'text' : 'password'}
                  name="password"
                  placeholder="Password..."
                />

                <BtnEye onClick={toggleBtn}>
                  {statePass ? <IoEyeOff /> : <IoEyeOutline />}
                </BtnEye>
              </Wrapper>
            </label>
            <Button type="submit">Register</Button>
          </FormStyled>
        </ContainerForm>
        <Register>
          <p>
            I already have an account,
            <LinkRegister to="/login"> log in</LinkRegister>
          </p>
        </Register>
      </Container>
    </Formik>
  );
};
