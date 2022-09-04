import { Formik } from 'formik';
import { nanoid } from 'nanoid';
import { getStorage, uploadBytes } from 'firebase/storage';
import { ref as sRef } from 'firebase/storage';
import { getDownloadURL } from 'firebase/storage';
import { getDatabase, ref, set, push, child, update } from 'firebase/database';
import {
  Background,
  Input,
  Forma,
  MainTitle,
  TextArea,
  Title,
  Button,
  ImgDiv,
  InputAddImg,
  Upload,
  Wrapped,
  Tour,
  WrapperTour,
  CheckBox,
  PreviewImg,
  CloseIcon,
  ButtonToReset,
} from './AddProduct.styled';
import * as yup from 'yup';
import { useState } from 'react';
import React from 'react';
import { toast } from 'react-toastify';
import { FormattedMessage } from 'react-intl'


const schema = yup.object().shape({
  title: yup.string().required(),
  location: yup.string().required(),
  description: yup.string(),
  price: yup.number().required(),
});

const values = {
  title: '',
  location: '',
  description: '',
  price: '',
  file: '',
  kidOfTuor: '',
};

export const AddProduct = () => {
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState(null);
  const storage = getStorage();
  const handleSubmit = async (value, { resetForm }) => {
    if (!value.checked) {
      toast.warning(<FormattedMessage id='warningChoseCategory'/>);
      return;
    }
    const db = getDatabase();
    const postListRef = ref(db, 'posts');
    const newPostRef = push(postListRef);
    await set(newPostRef, {});

    const storageRef = sRef(storage, `images/${file.name}`);
    await uploadBytes(storageRef, file).then(() => {
      toast.success(<FormattedMessage id='infoSuccses'/>);
    });
    getDownloadURL(sRef(storage, `images/${file.name}`))
      .then(url => {
        const postData = {
          id: nanoid(),
          title: value.title,
          location: value.location,
          description: value.description,
          price: value.price,
          photo: url,
          toggle: false,
          kindOfTuor: value.checked,
        };

        const newPostKey = push(child(ref(db), 'posts')).key;
        const updates = {};
        updates['/posts/' + newPostKey] = postData;
        update(ref(db), updates);
        setUrl(null);
      })
      .catch(error => {
        // Handle any errors
      });

    resetForm();
  };

  const changeHandler = e => {
    if (e.target.files.length > 0) {
      setFile(e.target.files[0]);
      setUrl(URL.createObjectURL(e.target.files[0]));
    }
  };

  const resetUrl = e => {
    setUrl('');
  };

  return (
    <Background>
      <Formik
        initialValues={values}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <Forma>
          <MainTitle>
            <FormattedMessage id='addProduct'/>
          </MainTitle>
          <div>
            <Title>
              <FormattedMessage id="title"/>
            </Title>
            <Input type="text" name="title"></Input>
            <Title>
            <FormattedMessage id="location"/>
            </Title>
            <Input type="text" name="location"></Input>
            <Title>
            <FormattedMessage id="description"/></Title>
            <TextArea type="text" name="description"></TextArea>
            <Title>
            <FormattedMessage id="photos"/>
            </Title>
            <ImgDiv>
              <label htmlFor="upload-file">
                <Wrapped>
                  {url ? (
                    <>
                      <PreviewImg src={url} alt="" />
                      <ButtonToReset type="button" onClick={e => resetUrl(e)}>
                        <CloseIcon />
                      </ButtonToReset>
                    </>
                  ) : (
                    <Upload />
                  )}
                </Wrapped>
              </label>
              <InputAddImg
                id="upload-file"
                accept="image/*"
                type="file"
                name="file"
                onChange={e => changeHandler(e)}
              />
            </ImgDiv>

            <div id="checkbox-group">
              <div role="group" aria-labelledby="checkbox-group">
                <WrapperTour>
                  <Tour>
                    <CheckBox
                      type="checkbox"
                      name="checked"
                      value="Family vacation"
                    />
                    <p>
                      <FormattedMessage id='familyVacation'/>
                    </p>
                  </Tour>
                  <Tour>
                    <CheckBox
                      type="checkbox"
                      name="checked"
                      value="Last minute tours"
                    />
                    <p>
                    <FormattedMessage id='lastMinuteTours'/>
                      </p>
                  </Tour>
                  <Tour>
                    <CheckBox
                      type="checkbox"
                      name="checked"
                      value="Beach tours"
                    />
                    <p> 
                    <FormattedMessage id='beachTours'/>
                     </p>
                  </Tour>
                  <Tour>
                    <CheckBox
                      type="checkbox"
                      name="checked"
                      value="Adventure tour"
                    />
                    <p>
                    <FormattedMessage id='adventureTour'/>
                      </p>
                  </Tour>
                </WrapperTour>
              </div>
            </div>
            <div>
              <Title>
              <FormattedMessage id='price'/>
              </Title>
              <Input type="number" name="price"></Input>
            </div>
            <Button type="submit">
            <FormattedMessage id='submit'/>
            </Button>
          </div>
        </Forma>
      </Formik>
    </Background>
  );
};
