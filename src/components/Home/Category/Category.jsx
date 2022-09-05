import React from 'react';
import {
  Container,
  Background,
  GridLogo,
  SelectElement,
  WrapperCategory
} from './Category.styled';
import { useDispatch, useSelector } from 'react-redux';
import { itemsSelectors } from 'redux/itemsSelectors';
import { setKindOfTour } from 'redux/filtersSlice';
import { Price } from '../Price/Price';
import { ClearFilters } from 'components/ClearFilters/ClearFilters';
import { useEffect, useState, useMemo } from 'react';
import { useIntl } from 'react-intl';
// import cleareFilter from 'packeges/eventBus/events/cleareFilter';

const customStyles = {
  option: state => ({
    color: state.isSelected && 'white',
    padding: 10,
  }),
};



export const Category = () => {
  const intl = useIntl()
  const defaultCategory = { category: '', label: intl.formatMessage({id: "CategoryPH"}) }
  const filters = useSelector(store => store.filters);
  const [property, setProperty] = useState('')
  const items = useSelector(itemsSelectors.getAllProducts);
  const dispatch = useDispatch();

//==clear filters

 useEffect(()=>{
    const prov = Object.values(filters);
    for (const arr of prov) {
      if (arr) {
        return  setProperty(true);
      }
    }
    return setProperty(false);
 }, [filters])

 
  const filterLocationByItems = useMemo(() => {
    const itemCategory = items
      .flatMap(item => item.kindOfTuor)
      .map(tour => {
        return { category: tour, label: tour };
      });

    const allItemsCategory = [
      defaultCategory,
      ...itemCategory,
    ];

    const country = {};
    const uniqueCategory = allItemsCategory.filter(
      ({ category }) => !country[category] && (country[category] = 1)
    );
    return uniqueCategory;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ items])


  const findSelectCategory = e => {
    dispatch(setKindOfTour(e.category));
  };


  // const [value, setValue ] = useState(filterLocationByItems())
  // useEffect(()=> {
  //   cleareFilter.subscribe(()=>{
  //     setValue(defaultCategory)
  //   })

  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])




  return (
    <Container>
      <Background>
       <WrapperCategory>
       <GridLogo />
       <SelectElement
          classNamePrefix="react-select"
          styles={customStyles}
          options={filterLocationByItems}
          onChange={e => findSelectCategory(e)}
          placeholder={intl.formatMessage({id: "CategoryPH"})}
        />
       </WrapperCategory>
        <Price />
        {property && <ClearFilters/>}
      </Background>
    </Container>
  );
};
