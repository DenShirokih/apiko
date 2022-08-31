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
  name: yup
    .string()
    .required()
    .matches(/^\s*[\S]+(\s[\S]+)+\s*$/gms, 'Please enter your full name.')
    .matches(
      /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
      'Name can only contain Latin letters.'
    ),
  email: yup.string().required(),
  password: yup.string().required(),
  configPassword: yup.string().required()
});


const values = {
  name: '',
  email: '',
  password: '',
  configPassword: '',
};

export const RegisterForm = () => {
  const [statePass, setStatePass] = useState(false);
  const [statePassConfig, setStatePassConfig] = useState(false);

  const toggleBtn = () => {
    setStatePass(prevState => !prevState);
  };

  const toggleBtnConfig = () => {
    setStatePassConfig(prevState => !prevState);
  };

  const dispatch = useDispatch();
 
  const handleSubmit = (
    { name, email, password, configPassword },
    { resetForm }
  ) => {
    if (password !== configPassword) {
      toast.error(`Password does not match!!!`);
      return;
    }
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
              <Input type="text" name="name" placeholder="Full name..." />
            </label>
            <label htmlFor="password">
              <DescriptionTitle>password</DescriptionTitle>
              <Wrapper>
                <Input
                  type={statePass ? 'text' : 'password'}
                  name="password"
                  placeholder="Password..."
                />
                <BtnEye onClick={toggleBtn} type="button">
                  {statePass ? <IoEyeOff /> : <IoEyeOutline />}
                </BtnEye>
              </Wrapper>
            </label>
            <label htmlFor="configPassword">
              <DescriptionTitle>repeat password</DescriptionTitle>
              <Wrapper>
                <Input
                  type={statePassConfig ? 'text' : 'password'}
                  name="configPassword"
                  placeholder="Config the password..."
                />
                <BtnEye type="button" onClick={toggleBtnConfig}>
                  {statePassConfig ? <IoEyeOff /> : <IoEyeOutline />}
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
