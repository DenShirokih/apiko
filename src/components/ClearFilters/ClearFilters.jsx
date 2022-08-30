import { clearFilter } from 'redux/filtersSlice';
import { useDispatch } from 'react-redux';
import { Button } from './ClearFilters.styled';

export const ClearFilters = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Button
        form="price-form"
        type="reset"
        onClick={() => dispatch(clearFilter())}
      >
        Clear filters
      </Button>
    </>
  );
};
