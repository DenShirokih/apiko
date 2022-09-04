import React from 'react';
import {
  Forma,
  Input,
  Button,
  InputWrapper,
  SearchLogo,
  LocationLoge,
  SvgContainer
} from './Filter.styled';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { SelectLocation } from '../SelectLocation/SelectLocation';
import { setSearch } from 'redux/filtersSlice';
import { FormattedMessage, useIntl } from 'react-intl'

const initialValues = {
  search: '',
};

export const Filter = () => {
  const intl = useIntl()
  const dispatch = useDispatch();
  const handleSubmit = (values, { resetForm }) => {
    dispatch(setSearch(values.search));
    resetForm();
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
            placeholder={intl.formatMessage({ id: "SaerchPH"})} 
          />
          <SvgContainer>
            <LocationLoge />
            <SelectLocation />
          </SvgContainer>
          <Button type="submit"><FormattedMessage id='search'/></Button>
        </InputWrapper>
      </Forma>
    </Formik>
  );
};
