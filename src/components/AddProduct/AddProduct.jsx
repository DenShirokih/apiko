import { Formik } from 'formik';
import { nanoid } from 'nanoid';
import { getStorage, uploadBytes } from 'firebase/storage';
import { ref as sRef } from 'firebase/storage';
import { getDatabase, ref, set, push, child, update } from 'firebase/database';
import {
  Background,
  Input,
  Forma,
  MainTitle,
  TextArea,
  Title,
  Button,
} from './AddProduct.styled';
import { useState } from 'react';
import React from 'react';

const values = {
  title: '',
  location: '',
  description: '',
  price: '',
  file: '',
};

export const AddProduct = () => {
  const [file, setFile] = useState(null);

  const handleSubmit = async (value, { resetForm }) => {
    const db = getDatabase();
    const postListRef = ref(db, 'posts');
    const newPostRef = push(postListRef);
    await set(newPostRef, {});
    const storage = getStorage();


    if (file) {
      const storageRef = sRef(storage, `images/${file.name}`);
      await uploadBytes(storageRef, file).then(() => {
        console.log('Uploaded a blob or file!');
      });

      const postData = {
        id: nanoid(),
        title: value.title,
        location: value.location,
        description: value.description,
        price: value.price,
        photo: 'hello',
      };

      const newPostKey = push(child(ref(db), 'posts')).key;
      const updates = {};
      updates['/posts/' + newPostKey] = postData;
      await update(ref(db), updates);
    }

    resetForm();
  };

  const changeHandler = e => {
    if (e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  console.log(file);

  return (
    <Background>
      <Formik initialValues={values} onSubmit={handleSubmit}>
        <Forma>
          <MainTitle>Add product</MainTitle>
          <div>
            <Title>titile</Title>
            <input
              accept="image/*"
              type="file"
              name="file"
              onChange={e => changeHandler(e)}
            />
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
