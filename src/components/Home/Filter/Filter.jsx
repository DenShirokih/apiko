import React from 'react';
import { Forma, Input, Select, Button, BtnClearInput } from './Filter.styled';
import { Formik } from 'formik';
import { useGetAllItems } from 'hooks/useGetAllItems';
import { useDispatch } from 'react-redux';
import { MdOutlineClose } from 'react-icons/md';
import { setFilter, clearFilter } from 'redux/itemsSlice';

const initialValues = {
  search: '',
};

export const Filter = () => {
  const clearinput = () => {
    dispatch(clearFilter());
  };
  const dispatch = useDispatch();
  const items = useGetAllItems();
  const handleSubmit = values => {
    const normalaizedFilter = values.search.toLowerCase();
    const filtredItems = items.filter(item =>
      item.title.toLowerCase().includes(normalaizedFilter)
    );
    dispatch(setFilter(filtredItems));
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Forma autoComplete="off">
        <Input
          type="text"
          name="search"
          placeholder="Search products by name"
        />
        <BtnClearInput type="button">
          <MdOutlineClose onClick={() => clearinput()} />
        </BtnClearInput>
        <Select name="location"></Select>

        <Button type="submit">Search</Button>
      </Forma>
    </Formik>
  );
};
