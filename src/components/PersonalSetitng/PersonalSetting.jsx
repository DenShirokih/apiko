import { Formik, Form } from 'formik';
import {
  ImgDiv,
  WrapperImg,
  WrapperForm,
  Container,
  Input,
  Title,
  H1,
  BtnForm,
  Label,
  ChooseBtn,
  BtnReset,
  IMG,
  ContentDiv,
  ButtonDiv,
} from './PersonalSetting.styled';
import { getAuth } from 'firebase/auth';
import { updateProfile, updateEmail } from 'firebase/auth';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import { useState } from 'react';
import { ref as sRef } from 'firebase/storage';
import { getStorage, uploadBytes } from 'firebase/storage';
import { getDownloadURL } from 'firebase/storage';
import { useDispatch } from 'react-redux';
import { setUser } from 'redux/authSlice';
import profileImg from 'icons/avatarProfile.png';
import { FormattedMessage, useIntl } from 'react-intl';

const schema = yup.object().shape({
  fullName: yup.string().required(),
  email: yup.string().required(),
  phoneNumber: yup.string().required(),
});

export const PersonalSetting = () => {
  const intl = useIntl();
  const dispatch = useDispatch();
  const auth = getAuth();
  const user = auth.currentUser;
  const id = user.uid;
  const photoUrl = user.photoURL;
  const [url, setUrl] = useState(photoUrl);
  const [file, setFile] = useState('');

  const initialValues = {
    fullName: user.displayName,
    phoneNumber: user.phoneNumber || '',
    email: user.email,
  };

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

    await getDownloadURL(sRef(storage, `picturesOfUsers/${file.name}`))
      .then(url => {
        updateProfile(user, {
          displayName: fullName,
          photoURL: url,
        });
      })
      .then(() => {
        toast.success(<FormattedMessage id="personalUpdated" />);
        dispatch(
          setUser({
            user: { name: fullName, email: email },
            id: id,
          })
        );
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

  const resetUrl = () => {
    photoUrl ? setUrl(photoUrl) : setUrl('');
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
              {url ? <IMG src={url} alt="" /> : <ImgDiv src={profileImg} />}
              <ButtonDiv>
                <Label>
                  <ChooseBtn
                    type="file"
                    name="file"
                    onChange={e => changeHandler(e)}
                  />
                  <p>
                    <FormattedMessage id="selectPhoto" />
                  </p>
                </Label>
                <BtnReset type="button" onClick={() => resetUrl()}>
                  <FormattedMessage id="reset" />
                </BtnReset>
              </ButtonDiv>
            </WrapperImg>
            <WrapperForm>
              <H1>
                <FormattedMessage id="updateProfile" />
              </H1>
              <ContentDiv>
                <Title>
                  <FormattedMessage id="FullName" />
                </Title>
                <Input
                  type="text"
                  name="fullName"
                  placeholder={intl.formatMessage({ id: 'FullName' })}
                />
                <Title>
                  <FormattedMessage id="email" />
                </Title>
                <Input
                  type="email"
                  name="email"
                  placeholder={intl.formatMessage({ id: 'email' })}
                />
                <BtnForm type="submit">
                  <FormattedMessage id="updateProfile" />
                </BtnForm>
              </ContentDiv>
            </WrapperForm>
          </Container>
        </Form>
      </Formik>
    </>
  );
};
