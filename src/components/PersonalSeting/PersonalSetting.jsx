import { Formik, Field, Form } from 'formik';
import { ImgDiv } from './PersonalSetting.styled';
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
    if (e.target.files.length > 0) {
      setUrl(URL.createObjectURL(e.target.files[0]));
      setFile(e.target.files[0]);
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
          <label htmlFor="upload-file">
            {url ? <img src={url} alt="" /> : <ImgDiv />}
          </label>
          <input type="file" name="file" onChange={e => changeHandler(e)} />
          <button type="button">Update photo</button>
          <p>FullName</p>
          <Field type="text" name="fullName" />
          <p>Phone number</p>
          <Field type="text" name="phoneNumber" />
          <p>Email</p>
          <Field type="email" name="email" />
          <button type="submit">update profile</button>
        </Form>
      </Formik>
    </>
  );
};
