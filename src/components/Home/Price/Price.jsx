import { useDispatch } from 'react-redux';
import { Input } from './Price.styled';
import { setMaxPrice, setMinPrice } from 'redux/filtersSlice';
import { useIntl } from 'react-intl';

export const Price = () => {
  const dispatch = useDispatch();
  const intl = useIntl()

  const handleSubmit = e => {
    if (e.target.name === 'min') {
      dispatch(setMinPrice(e.target.value));
      return;
    }
    dispatch(setMaxPrice(e.target.value));
  };

  return (
    <form action="#" id="price-form">
      <Input
        name="min"
        onChange={e => handleSubmit(e)}
        type="number"
        placeholder={intl.formatMessage({ id: "PraceFromPH"})}
      />
      <Input
        name="max "
        onChange={e => handleSubmit(e)}
        type="number"
        placeholder={intl.formatMessage({ id: "PraceToPH"})}
      />
    </form>
  );
};
