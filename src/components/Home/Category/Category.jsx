import {
  Container,
  Background,
  Select,
  Input,
  GridLogo,
} from './Category.styled';
import { Formik, Form } from 'formik';

export const Category = () => {
  const handleSubmit = e => {};
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
