import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { itemsSelectors } from 'redux/itemsSelectors';
import { setLocation } from 'redux/filtersSlice';
import { Selector } from './SelectLocation.styled';

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: '1px dotted pink',
    color: state.isSelected ? 'white' : 'black',
    padding: 10,
  }),
  control: () => ({
    // none of react-select's styles are passed to <Control />
    width: 200,
    height: 50,
  }),
  


}

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
      <Selector
        options={filterLocationByItems()}
        onChange={e => findSelectedLocation(e)}
        // styles={customStyles}
      />
    </>
  );
};