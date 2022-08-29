import React from 'react';
import {
  Container,
  Background,
  SelectCategory,
  Input,
  GridLogo,
} from './Category.styled';
import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { setMaxPrice, setMinPrice } from 'redux/filtersSlice';
import { useSelector } from 'react-redux';
import { itemsSelectors } from 'redux/itemsSelectors';
import { setKidOfTour } from 'redux/filtersSlice';

export const Category = () => {
  const items = useSelector(itemsSelectors.getAllProducts);
  const dispatch = useDispatch();
  const handleSubmit = e => {
    if (e.target.name === 'min') {
      dispatch(setMinPrice(e.target.value));
      return;
    }
    dispatch(setMaxPrice(e.target.value));
  };

  // console.log(items)

  const filterLocationByItems = () => {
    const itemCategory = items
      .flatMap(item => item.kindOfTuor)
      .map(tour => {
        return { category: tour, label: tour };
      });

    const allItemsCategory = [
      { location: '', label: 'Choose category' },
      ...itemCategory,
    ];

    const country = {};
    const uniqueCategory = allItemsCategory.filter(
      ({ label }) => !country[label] && (country[label] = 1)
    );
    return uniqueCategory;
  };

  const findSelectCategory = e => {
    dispatch(setKidOfTour(e.category))
  }

  return (
    <Container>
      <Background>
        <GridLogo />
        <SelectCategory
          options={filterLocationByItems()}
          onChange={e => findSelectCategory(e)}
          placeholder="Choose Category"
        />
        <Formik>
          <Form>
            <Input
              name="min"
              onChange={e => handleSubmit(e)}
              type="text"
              placeholder="Price from (USD)"
            />
            <Input
              name="max "
              onChange={e => handleSubmit(e)}
              type="text"
              placeholder="Price to (USD)"
            />
          </Form>
        </Formik>
      </Background>
    </Container>
  );
};
