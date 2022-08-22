import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, Input, Select, Button } from './Filter.styled';

export const Filter = () => {
  const { register} = useForm();

  return (
    <Form
      autoComplete="off"
      // onSubmit={handleSubmit(data => {
      //   loginUser(data);
      // })}
    >
      <label htmlFor="search">
        <Input
          type="text"
          name="search"
          {...register('search', {
            register: true,
            required: 'This is required',
          })}
          placeholder="Search products by name"
        />
      <Select name='location'>
      </Select>
      </label>
      <Button type="submit">Search</Button>
    </Form>
  );
};
