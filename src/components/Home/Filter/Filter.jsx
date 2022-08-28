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
import { useGetAllItems } from 'hooks/useGetAllItems';
import { useDispatch, useSelector } from 'react-redux';
import { MdOutlineClose } from 'react-icons/md';
import { setFilter, clearFilter } from 'redux/itemsSlice';
import { itemsSelectors } from 'redux/itemsSelectors';
import { SelectLocation } from '../SelectLocation/SelectLocation';

const initialValues = {
  search: '',
};

export const Filter = () => {
  const clearinput = () => {
    dispatch(clearFilter());
  };

  const filterStore = useSelector(itemsSelectors.getFilter);
  console.log(filterStore);

  const dispatch = useDispatch();
  const items = useGetAllItems();
  const handleSubmit = values => {
    const normalaizedFilter = values.search.toLowerCase();
    const filtredItems = items.filter(item =>
      item.title.toLowerCase().includes(normalaizedFilter)
    );
    dispatch(setFilter(filtredItems));
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
            <MdOutlineClose onClick={() => clearinput()} />
          </BtnClearInput>
          <SelectLocation items={items} />
          <Button type="submit">Search</Button>
        </InputWrapper>
      </Forma>
    </Formik>
  );
};
