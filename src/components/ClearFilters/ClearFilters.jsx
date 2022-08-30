import { clearFilter } from 'redux/filtersSlice';
import { useDispatch } from 'react-redux';
import { Button } from './ClearFilters.styled';

export const ClearFilters = () => {
  const dispatch = useDispatch();
  return (
    <>
      {/* <Button
        type="reset"
        form="form-price"
        onClick={() => dispatch(clearFilter())}
      >
        Clear filters
      </Button> */}
      <button
        form="price-form"
        type="reset"
        onClick={() => dispatch(clearFilter())}
      ></button>
    </>
  );
};
