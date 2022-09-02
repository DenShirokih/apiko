import { Formik, Field, Form } from 'formik';
import {
  ImgDiv,
  WrapperImg,
  WrapperForm,
  Container,
  Input,
  Title,
  H1,
  BtnForm,
} from './PersonalSetting.styled';
import { getAuth } from 'firebase/auth';
import { updateProfile, updateEmail } from 'firebase/auth';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import { useState } from 'react';
import { ref as sRef } from 'firebase/storage';
import { getStorage, uploadBytes } from 'firebase/storage';
import { getDownloadURL } from 'firebase/storage';

const schema = yup.object().shape({
  fullName: yup.string().required(),
  email: yup.string().required(),
  phoneNumber: yup.string().required(),
});

export const PersonalSetting = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  const id = user.uid;
  const initialValues = {
    fullName: user.displayName,
    phoneNumber: user.phoneNumber || '',
    email: user.email,
  };

  const photoUrl = user.photoURL;
  const [url, setUrl] = useState(photoUrl);
  const [file, setFile] = useState('');

  const handleSubmit = async ({ fullName, phoneNumber, email }) => {
    await updateEmail(user, email)
      .then(() => console.log('Email updated'))
      .catch(error => console.log(error));

    const storage = getStorage();
    const storageRef = sRef(storage, `picturesOfUsers/${file.name}`);
    await uploadBytes(storageRef, file)
      .then(() => {
        console.log('pictures upload!');
      })
      .catch(error => console.log(error));

    await getDownloadURL(sRef(storage, `images/${file.name}`))
      .then(url => {
        updateProfile(user, {
          displayName: fullName,
          photoURL: url,
        });
      })
      .then(() => {
        toast.success('УРААААААААА');
      })
      .catch(error => {
        console.log(error);
      });
  };

  const changeHandler = e => {
    if (e.current.target.files.length > 0) {
      setUrl(URL.createObjectURL(e.target.files[0]));
      setFile(e.target.files[0]);
      console.log('srabativaem naxyi');
    }
  };

  return (
    <>
      <Formik
        validationSchema={schema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <Form>
          <Container>
            <WrapperImg>
              {/* <label htmlFor="upload-file"> */}
              {url ? <img src={url} alt="" /> : <ImgDiv />}
              <input type="file" name="file" onChange={e => changeHandler(e)} />
              {/* </label> */}
            </WrapperImg>
            <WrapperForm>
              <H1>Update Profile</H1>
              <Title>FullName</Title>
              <Input
                type="text"
                name="fullName"
                placeholder="type your full name"
              />
              <Title>Phone number</Title>
              <Input
                type="text"
                name="phoneNumber"
                placeholder="type your phone number"
              />
              <Title>Email</Title>
              <Input type="email" name="email" placeholder="email" />
              <BtnForm type="submit">Update profile</BtnForm>
            </WrapperForm>
          </Container>
        </Form>
      </Formik>
    </>
  );
};
