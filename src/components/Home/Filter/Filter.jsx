import React from 'react';
import {
  Forma,
  Input,
  Button,
  BtnClearInput,
  InputWrapper,
  SearchLogo,
  LocationLoge
} from './Filter.styled';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { MdOutlineClose } from 'react-icons/md';
import { SelectLocation } from '../SelectLocation/SelectLocation';
import { setSearch } from 'redux/filtersSlice';
import { clearFilter } from 'redux/filtersSlice';

const initialValues = {
  search: '',
};

export const Filter = () => {

  const dispatch = useDispatch();
  const handleSubmit = values => {
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
            <MdOutlineClose onClick={()=>dispatch(clearFilter())} />
          </BtnClearInput>
          <LocationLoge/>
          <SelectLocation />
          <Button type="submit">Search</Button>
        </InputWrapper>
      </Forma>
    </Formik>
  );
};
