import React from 'react';
import {
  Container,
  Background,
  GridLogo,
  SelectElement,
  WrapperCategory
} from './Category.styled';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { itemsSelectors } from 'redux/itemsSelectors';
import { setKindOfTour } from 'redux/filtersSlice';
import { Price } from '../Price/Price';
import { ClearFilters } from 'components/ClearFilters/ClearFilters';
import { useEffect } from 'react';
import { useState } from 'react';
import { useIntl } from 'react-intl';

const customStyles = {
  option: state => ({
    color: state.isSelected && 'white',
    padding: 10,
  }),
};

export const Category = () => {
  const intl = useIntl()
  const filters = useSelector(store => store.filters);
  const [property, setProperty] = useState('')

 useEffect(()=>{
    const prov = Object.values(filters);
    for (const arr of prov) {
      if (arr) {
        return  setProperty(true);
      }
    }
    return setProperty(false);

 }, [filters])

 
  const items = useSelector(itemsSelectors.getAllProducts);
  const dispatch = useDispatch();

  const filterLocationByItems = () => {
    const itemCategory = items
      .flatMap(item => item.kindOfTuor)
      .map(tour => {
        return { category: tour, label: tour };
      });

    const allItemsCategory = [
      { category: '', label: intl.formatMessage({id: "CategoryPH"}) },
      ...itemCategory,
    ];

    const country = {};
    const uniqueCategory = allItemsCategory.filter(
      ({ category }) => !country[category] && (country[category] = 1)
    );
    return uniqueCategory;
  };

  const findSelectCategory = e => {
    dispatch(setKindOfTour(e.category));
  };

  return (
    <Container>
      <Background>
        
       <WrapperCategory>
       <GridLogo />
       <SelectElement
          classNamePrefix="react-select"
          styles={customStyles}
          options={filterLocationByItems()}
          onChange={e => findSelectCategory(e)}
          placeholder={intl.formatMessage({id: "CategoryPH"})}
        />
       </WrapperCategory>
        <Price />
        {property && <ClearFilters />}
      </Background>
    </Container>
  );
};
