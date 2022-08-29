import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import { Input } from './Price.styled';
import { setMaxPrice, setMinPrice } from 'redux/filtersSlice';

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
    <Formik>
      <Form>
        <Input
          name="min"
          onChange={e => handleSubmit(e)}
          type="text"
          placeholder="Price from (USD)"
        />
        <Input
          name="max "
          onChange={e => handleSubmit(e)}
          type="text"
          placeholder="Price to (USD)"
        />
      </Form>
    </Formik>
  );
};
