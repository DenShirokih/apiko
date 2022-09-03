import { Outlet } from 'react-router-dom';
import { Footer } from 'components/Footer/Footer';

export const Layout = () => {
  return (
    <div className="position">
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
