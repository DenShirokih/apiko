import { clearFilter } from 'redux/filtersSlice';
import { useDispatch } from 'react-redux';
import { Button } from './ClearFilters.styled';
import { FormattedMessage } from 'react-intl'


export const ClearFilters = () => {
  
  const dispatch = useDispatch();
  return (
    <>
      <Button
        form="price-form"
        type="reset"
        onClick={() => dispatch(clearFilter())}
      >
        <FormattedMessage id='clearFilters'/>
      </Button>
    </>
  );
};
