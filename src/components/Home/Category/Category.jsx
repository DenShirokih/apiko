import {
  Container,
  Background,
  Select,
  Input,
  GridLogo,
} from './Category.styled';
import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { setMaxPrice, setMinPrice } from 'redux/filtersSlice';

export const Category = () => {
  const dispatch = useDispatch()
  const handleSubmit = e => {
    if(e.target.name === "min"){
      dispatch(setMinPrice(e.target.value))
      return
    }
    dispatch(setMaxPrice(e.target.value))
  };


  return (
    <Container>
      <Background>
        <GridLogo />
        <Select name="" id="">
          {/* <option value="value1" selected>Choose Category</option>
          <option value="value2">Top</option>
          <option value="value3">Best price</option> */}
        </Select>
        <Formik>
          <Form>
            <Input
              name="min"
              onChange={e => handleSubmit(e)}
              type="text"
              placeholder="Min"
            />
            <Input
              name="max "
              onChange={e => handleSubmit(e)}
              type="text"
              placeholder="Max"
            />
          </Form>
        </Formik>
      </Background>
    </Container>
  );
};
