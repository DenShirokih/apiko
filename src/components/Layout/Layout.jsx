import { Outlet } from 'react-router-dom';
import { Footer } from 'components/Footer/Footer';
import { Overflow } from './Layout.styled';

export const Layout = () => {
  return (
    <Overflow>
      <Outlet/>
      <Footer />
      </Overflow>
  );
};
