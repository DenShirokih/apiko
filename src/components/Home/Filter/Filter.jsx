import React from 'react';
import {
  Forma,
  Input,
  Button,
  BtnClearInput,
  InputWrapper,
  SearchLogo,
} from './Filter.styled';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { MdOutlineClose } from 'react-icons/md';
import { SelectLocation } from '../SelectLocation/SelectLocation';
import { useSelector } from 'react-redux';
import { itemsSelectors } from 'redux/itemsSelectors';
import { products } from 'redux/itemsSlice';
import { useGetAllItems } from 'hooks/useGetAllItems';
import { setSearch } from 'redux/filtersSlice';

const initialValues = {
  search: '',
};

export const Filter = () => {
  const items = useSelector(itemsSelectors.getAllProducts);
  const dispatch = useDispatch();
  const refreshItems = useGetAllItems();

  const handleSubmit = values => {
    // const normalaizedFilter = values.search.toLowerCase();
    // const filtredItems = items.filter(item =>
    //   item.title.toLowerCase().includes(normalaizedFilter)
    // );
    // dispatch(products(filtredItems))
    dispatch(setSearch(values.search));
    return;
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Forma autoComplete="off">
        <InputWrapper>
          <SearchLogo />
          <Input
            type="text"
            name="search"
            placeholder="Search products by name"
          />
          <BtnClearInput type="button">
            <MdOutlineClose onClick={() => dispatch(products(refreshItems))} />
          </BtnClearInput>
          <SelectLocation />
          <Button type="submit">Search</Button>
        </InputWrapper>
      </Forma>
    </Formik>
  );
};
