import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { itemsSelectors } from 'redux/itemsSelectors';
import { setLocation } from 'redux/filtersSlice';
import { SelectElement } from './SelectLocation.styled';
import { useIntl } from 'react-intl';



const customStyles = {
  option: (state) => ({
    color: state.isSelected && 'white',
    padding: 10,
    }),
    container: styles => ({ ...styles,  
      width: 170,
      "@media only screen and (max-width: 768px)": {
        ...styles["@media only screen and (max-width: 768px)"],
        width: "100%",
    },
    }),
    
}

export const SelectLocation = () => {
  const intl = useIntl()
  const dispatch = useDispatch();
  const items = useSelector(itemsSelectors.getAllProducts);

  const filterLocationByItems = () => {
    const itemLocation = items.map(item => {
      return { location: item.location, label: item.location };
    });
    const allItemsLocation = [{ location: '', label: intl.formatMessage({id: "LocationPH"}) }, ...itemLocation];
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
        placeholder={intl.formatMessage({id: "LocationPH"})}
      />
    </>
  );
};
