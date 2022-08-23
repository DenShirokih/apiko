import { Formik } from 'formik';
import { getDatabase, ref, set, push } from 'firebase/database';
import {
  Background,
  Input,
  Forma,
  MainTitle,
  TextArea,
  Title,
  Button,
} from './AddProduct.styled';

const values = {
  title: '',
  location: '',
  description: '',
  price: '',
};

export const AddProduct = () => {
  const handleSubmit = async value => {
    const db = getDatabase();
    const postListRef = ref(db, 'posts');
    const newPostRef = push(postListRef);
    await set(newPostRef, {
      title: value.title,
      location: value.location,
      description: value.description,
      price: value.price,
    });
  };
  return (
    <Background>
      <Formik initialValues={values} onSubmit={handleSubmit}>
        <Forma>
          <MainTitle>Add product</MainTitle>
          <div>
            <Title>titile</Title>
            <Input type="text" name="title"></Input>
          </div>
          <div>
            <Title>location</Title>
            <Input type="text" name="location"></Input>
          </div>
          <div>
            <Title>descriTitletion</Title>
            <TextArea type="text" name="description"></TextArea>
          </div>
          <div>
            <Title>price</Title>
            <Input type="number" name="price"></Input>
          </div>
          <Button type="submit">submit</Button>
        </Forma>
      </Formik>
    </Background>
  );
};
