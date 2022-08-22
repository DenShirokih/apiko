import React from 'react';
import { useForm } from 'react-hook-form';
import { Container } from 'components/LogInForm/LoginForm.styled';
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
  const { register } = useForm();

  return (
    <Container>
      <ContainerForm>
        <TitleDiv>
          <Title>Register</Title>
        </TitleDiv>
        <Form
          autoComplete="off"
          // onSubmit={handleSubmit(data => {
          //   loginUser(data);
          // })}
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
          <label htmlFor="name">
            <DescriptionTitle>full name</DescriptionTitle>
            <Input
              type="name"
              name="name"
              {...register('name', {
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
          <label htmlFor="password">
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
          </label>
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
