import Select from 'react-select';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { itemsSelectors } from 'redux/itemsSelectors';
import { setLocation } from 'redux/filtersSlice';

export const SelectLocation = () => {
  const dispatch = useDispatch();

  const items = useSelector(itemsSelectors.getAllProducts);

  const filterLocationByItems = () => {
    const itemLocation = items.map(item => {
      return { location: item.location, label: item.location };
    });
    const allItemsLocation = [{ location: '', label: 'all' }, ...itemLocation];
    const country = {};
    const uniqueLocation = allItemsLocation.filter(
      ({ location }) => !country[location] && (country[location] = 1)
    );
    return uniqueLocation;
  };

  const findSelectedLocation = e => {
    dispatch(setLocation(e.location));
  };
  return (
    <>
      <Select
        options={filterLocationByItems()}
        onChange={e => findSelectedLocation(e)}
      />
    </>
  );
};
