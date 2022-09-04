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
import { FormattedMessage, useIntl } from 'react-intl'


const schema = yup.object().shape({
  name: yup
    .string()
    .required()
    .matches(/^\s*[\S]+(\s[\S]+)+\s*$/gms, <FormattedMessage id='inputFullName'/>)
    .matches(
      /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
      <FormattedMessage id='warningName'/>
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
  const intl = useIntl()
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
      toast.error(<FormattedMessage id='wrongPassword'/>);
      return;
    }
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        updateProfile(userCredential.user, { displayName: name });
        toast.success(<FormattedMessage id='welcome'/>);
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
            <Title>
            <FormattedMessage id='Register'/>
            </Title>
          </TitleDiv>
          <FormStyled autoComplete="off">
            <label htmlFor="email">
              <DescriptionTitle>
              <FormattedMessage id='email'/>
              </DescriptionTitle>
              <Input type="email" name="email" placeholder={intl.formatMessage({id: "email"})} />
            </label>
            <label htmlFor="name">
              <DescriptionTitle>
              <FormattedMessage id='FullName'/>
                </DescriptionTitle>
              <Input type="text" name="name"  placeholder={intl.formatMessage({id: "FullName"})} />
            </label>
            <label htmlFor="password">
              <DescriptionTitle>
              <FormattedMessage id='Password'/>
              </DescriptionTitle>
              <Wrapper>
                <Input
                  type={statePass ? 'text' : 'password'}
                  name="password"
                  placeholder={intl.formatMessage({id: "Password"})}
                />
                <BtnEye onClick={toggleBtn} type="button">
                  {statePass ? <IoEyeOff /> : <IoEyeOutline />}
                </BtnEye>
              </Wrapper>
            </label>
            <label htmlFor="configPassword">
              <DescriptionTitle>
              <FormattedMessage id='RepeatPassword'/>
               </DescriptionTitle>
              <Wrapper>
                <Input
                  type={statePassConfig ? 'text' : 'password'}
                  name="configPassword"
                  placeholder={intl.formatMessage({id: "RepeatPassword"})}
                />
                <BtnEye type="button" onClick={toggleBtnConfig}>
                  {statePassConfig ? <IoEyeOff /> : <IoEyeOutline />}
                </BtnEye>
              </Wrapper>
            </label>
            <Button type="submit">
            <FormattedMessage id='Register'/>
            </Button>
          </FormStyled>
        </ContainerForm>
        <Register>
          <p>
          <FormattedMessage id='haveAccount'/>
            <LinkRegister to="/login">
            <FormattedMessage id='login'/>
            </LinkRegister>
          </p>
        </Register>
      </Container>
    </Formik>
  );
};
