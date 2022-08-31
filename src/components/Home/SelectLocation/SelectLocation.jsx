import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { itemsSelectors } from 'redux/itemsSelectors';
import { setLocation } from 'redux/filtersSlice';
import { SelectElement } from './SelectLocation.styled';

const customStyles = {
  option: (state) => ({
    color: state.isSelected && 'white',
    padding: 10,
    }),
}

export const SelectLocation = () => {
  const dispatch = useDispatch();
  const items = useSelector(itemsSelectors.getAllProducts);

  const filterLocationByItems = () => {
    const itemLocation = items.map(item => {
      return { location: item.location, label: item.location };
    });
    const allItemsLocation = [{ location: '', label: 'Location' }, ...itemLocation];
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
      <SelectElement
        classNamePrefix="react-select"
        options={filterLocationByItems()}
        onChange={e => findSelectedLocation(e)}
        styles={customStyles}
      />
    </>
  );
};
