import { Formik, Field, Form } from 'formik';
import { ImgDiv } from './PersonalSetting.styled';
import { getAuth, getIdToken } from 'firebase/auth';
import { updateProfile, updateEmail, updatePhoneNumber, RecaptchaVerifier, PhoneAuthProvider } from 'firebase/auth';
import { toast } from 'react-toastify';
import * as yup from 'yup';

const schema = yup.object().shape({
    fullName: yup.string().required(),
    email: yup.string().required(),
    phoneNumber: yup.string().required()
  });




export const PersonalSetting = () => {
    const auth = getAuth();
    const user = auth.currentUser; 
    const token = user.getIdToken()
    console.log(user)

    const initialValues = {
        fullName: user.displayName,
        phoneNumber: user.phoneNumber || '',
        email: user.email,
    }
      


    const handleSubmit = async ({fullName, phoneNumber, email}) => {

        await updateProfile(user, {
            displayName: fullName,
            phoneNumber: phoneNumber
        })
        .then(()=>{
            console.log("DisplayName has been updated")
            console.log(user)
        })
        .catch((error)=> {
            console.log(error)
        })
        

        await updateEmail(user,  email
        ).then(()=> console.log('Email updated')).catch((error)=> console.log(error))
    
    
    }


  return (
    <>
      <Formik 
      validationSchema={schema}
      initialValues={initialValues} 
      onSubmit={handleSubmit}>
        <Form>
          <ImgDiv>
            <img src="" alt="" />
            <button type='button'>Update photo</button>
          </ImgDiv>
          <p>FullName</p>
          <Field type="text" name='fullName'/>
          <p>Phone number</p>
          <Field type="text" name='phoneNumber'/>
          <p>Email</p>
          <Field type="email" name='email'/>
          <button type='submit'>update profile</button>
        </Form>
      </Formik>
    </>
  );
};
