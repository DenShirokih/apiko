import Select from 'react-select';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLocation } from 'redux/itemsSlice';
import { itemsSelectors } from 'redux/itemsSelectors';

export const SelectLocation = ({ items }) => {
  const dispatch = useDispatch();
  const filtredItems = useSelector(itemsSelectors.getFilter);

  const filterLocationByItems = (array) => {
    const itemLocation = array.map(item => {
        return { location: item.location, label: item.location };
      });
      const allItemsLocation = [
        ...itemLocation,
        { location: '', label: 'all' },
      ];
      return allItemsLocation
  }

  const filtredLocation = () => {
    if (filtredItems.length > 0) {
      return filterLocationByItems(filtredItems)
    } else {
       return filterLocationByItems(items)
    }
  };

  const findSelectedLocation = e => {
    dispatch(setLocation(e.location));
  };

  return (
    <>
      <Select
        options={filtredLocation()}
        onChange={e => findSelectedLocation(e)}
      />
    </>
  );
};
