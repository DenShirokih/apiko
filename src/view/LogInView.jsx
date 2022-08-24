import { HeaderForm } from 'components/HeaderForm/HeaderForm';
import { LoginForm } from 'components/LogInForm/LoginForm';
import { ToastContainer, toast } from 'react-toastify';

export const LoginView = () => {
  return (
    <>
      <HeaderForm />
      <ToastContainer />
      <LoginForm />
    </>
  );
};
