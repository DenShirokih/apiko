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
import { FormattedMessage, useIntl } from 'react-intl'


const schema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required(),
});

const values = {
  email: '',
  password: '',
};

export const LoginForm = () => {
  const intl = useIntl()
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
        toast.success(<FormattedMessage id='welcome'/>);
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
            <Title>
            <FormattedMessage id='login' />
            </Title>
          </TitleDiv>
          <Container>
            <ContainerForm>
              <FormStyled autoComplete="off">
                <label htmlFor="email">
                  <DescriptionTitle>
                  <FormattedMessage id='email' />
                  </DescriptionTitle>
                  <Input type="email" name="email" placeholder={intl.formatMessage({id: "email"})} />
                </label>
                <label htmlFor="password">
                  <DescriptionTitle>
                  <FormattedMessage id='Password' />
                  </DescriptionTitle>
                  <Wrapper>
                    <Input
                      type={statePass ? 'text' : 'password'}
                      name="password"
                      placeholder={intl.formatMessage({id: "Password"})} 
                    />
                    <BtnEye type="button" onClick={toggleBtn}>
                      {statePass ? <IoEyeOff /> : <IoEyeOutline />}
                    </BtnEye>
                  </Wrapper>
                </label>
                <Button type="submit">
                <FormattedMessage id='Contine' />
                </Button>
              </FormStyled>
            </ContainerForm>
          </Container>
        </ContainerForm>
        <Register>
          <p>
          <FormattedMessage id='NoAccount' />
            <LinkRegister to="/register">
            <FormattedMessage id='RegisterNow' />
            </LinkRegister>
          </p>
        </Register>
      </Container>
    </Formik>
  );
};
