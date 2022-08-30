import { clearFilter } from 'redux/filtersSlice';
import { useDispatch } from 'react-redux';

export const ClearForm = () => {
  const dispatch = useDispatch();
  return (
    <>
      <button type="button" onClick={() => dispatch(clearFilter())}>
        clear form
      </button>
    </>
  );
};
