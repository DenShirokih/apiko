import { useDispatch } from 'react-redux';
import { Input } from './Price.styled';
import { setMaxPrice, setMinPrice } from 'redux/filtersSlice';
import { clearFilter } from 'redux/filtersSlice';

export const Price = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    if (e.target.name === 'min') {
      dispatch(setMinPrice(e.target.value));
      return;
    }
    dispatch(setMaxPrice(e.target.value));
  };

  return (
    <>
      <form action="#" id="price-form">
        <input
          name="min"
          onChange={e => handleSubmit(e)}
          type="number"
          placeholder="Price from (USD)"
        />
        <input
          name="max "
          onChange={e => handleSubmit(e)}
          type="number"
          placeholder="Price to (USD)"
        />
      </form>
    </>
  );
};
