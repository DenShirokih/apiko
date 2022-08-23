import { Formik } from 'formik';
import { nanoid } from 'nanoid';
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
  file: '',
};

export const AddProduct = () => {
  const handleSubmit = async (value, { resetForm }) => {
    const db = getDatabase();
    const postListRef = ref(db, 'posts');
    const newPostRef = push(postListRef);
    await set(newPostRef, {
      id: nanoid(),
      title: value.title,
      location: value.location,
      description: value.description,
      price: value.price,
    });
    resetForm();
    console.log(value);
  };
  return (
    <Background>
      <Formik initialValues={values} onSubmit={handleSubmit}>
        <Forma>
          <MainTitle>Add product</MainTitle>
          <div>
            <Title>titile</Title>
            <Input type="file" name="file" />
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
