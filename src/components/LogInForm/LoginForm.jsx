import React from 'react';
import { useForm } from 'react-hook-form';
import {
  ContainerForm,
  TitleDiv,
  Input,
  Title,
  DescriptionTitle,
  Form,
  Button, 
  Register,
  Container,
  LinkRegister
} from './LoginForm.styled';

export const LoginForm = () => {
  const { register } = useForm();

  return (
  <Container>
    <ContainerForm>
      <TitleDiv>
        <Title>Login</Title>
      </TitleDiv>
      <Form
        autoComplete="off"
        // onSubmit={handleSubmit(data => {
        //   loginUser(data);
        // })}
      >
        <label htmlFor="email">
          <DescriptionTitle>Email</DescriptionTitle>
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
        <label htmlFor="password">
          <DescriptionTitle>Password</DescriptionTitle>
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
        <Button type="submit">Continue</Button>
      </Form>
    </ContainerForm>
    <Register>
      <p>I have no account, <LinkRegister to="/register">register now</LinkRegister></p>
    </Register>
    </Container>
  );
};
