import React from 'react';
import { Forma, Input, Select, Button } from './Filter.styled';
import { Formik } from 'formik';
import { useGetAllItems } from 'hooks/useGetAllItems';


const initialValues ={
  search: '',
}

export const Filter = () => {
  const items = useGetAllItems()

  const handleSubmit = (values) =>{
    

  }


  return (
    <Formik 
    initialValues={initialValues}
    onSubmit={handleSubmit}
    >
      <Forma
        autoComplete="off">
        <label htmlFor="search">
          <Input
            type="text"
            name="search"
            placeholder="Search products by name"
          />
          <Select name="location"></Select>
        </label>
        <Button type="submit">Search</Button>
      </Forma>
    </Formik>
  );
};
