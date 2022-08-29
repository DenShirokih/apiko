import React from 'react';
import {
  Container,
  Background,
  SelectCategory,
  GridLogo,
} from './Category.styled';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { itemsSelectors } from 'redux/itemsSelectors';
import { setKidOfTour } from 'redux/filtersSlice';
import { Price } from '../Price/Price';

export const Category = () => {
  const items = useSelector(itemsSelectors.getAllProducts);
  const dispatch = useDispatch();

  const filterLocationByItems = () => {
    const itemCategory = items
      .flatMap(item => item.kindOfTuor)
      .map(tour => {
        return { category: tour, label: tour };
      });

    const allItemsCategory = [
      { category: '', label: 'Choose category' },
      ...itemCategory,
    ];

    const country = {};
    const uniqueCategory = allItemsCategory.filter(
      ({ category }) => !country[category] && (country[category] = 1)
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
        <Price/>
      </Background>
    </Container>
  );
};
