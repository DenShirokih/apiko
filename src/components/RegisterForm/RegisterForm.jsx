import { useForm } from 'react-hook-form';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { Container } from 'components/LogInForm/LoginForm.styled';
import { useDispatch } from 'react-redux/es/exports';
import { setAuthToken, setUser } from 'redux/authSlice';
import { updateProfile } from 'firebase/auth';
import {
  ContainerForm,
  TitleDiv,
  Title,
  Form,
  DescriptionTitle,
  Input,
  Button,
  Register,
  LinkRegister,
} from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispath = useDispatch();
  const { register, handleSubmit, reset } = useForm();

  const registerUser = async ({ email, password }) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const user = userCredential.user;
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
  return (
    <Container>
      <ContainerForm>
        <TitleDiv>
          <Title>Register</Title>
        </TitleDiv>
        <Form
          autoComplete="off"
          onSubmit={handleSubmit(data => {
            registerUser(data);
          })}
        >
          <label htmlFor="email">
            <DescriptionTitle>email</DescriptionTitle>
            <Input
              type="email"
              name="email"
              {...register('email', {
                register: true,
                required: 'This is required',
              })}
              placeholder="Email..."
            />
          </label>
          <label htmlFor="displayName">
            <DescriptionTitle>full name</DescriptionTitle>
            <Input
              type="text"
              name="displayName"
              {...register('displayName', {
                register: true,
                required: 'This is required',
              })}
              placeholder="name..."
            />
          </label>
          <label htmlFor="password">
            <DescriptionTitle>password</DescriptionTitle>
            <Input
              type="password"
              name="password"
              {...register('password', {
                register: true,
                required: 'This is required',
                suggested: 'current-password',
              })}
              placeholder="Password..."
            />
          </label>
          {/* <label htmlFor="password">
            <DescriptionTitle>Password again</DescriptionTitle>
            <Input
              type="password"
              name="password"
              {...register('password', {
                register: true,
                required: 'This is required',
                suggested: 'current-password',
              })}
              placeholder="Password..."
            />
          </label> */}
          <Button type="submit">Register</Button>
        </Form>
      </ContainerForm>
      <Register>
        <p>
          I already have an account,
          <LinkRegister to="/login"> log in</LinkRegister>
        </p>
      </Register>
    </Container>
  );
};
