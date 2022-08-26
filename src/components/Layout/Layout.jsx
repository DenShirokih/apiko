import { Outlet } from 'react-router-dom';
import { Footer } from 'components/Footer/Footer';

export const Layout = () => {
  return (
    <div className='postion'>
      <div className='outlet'>
      <Outlet/>
      </div>
      <Footer />
    </div>
  );
};
