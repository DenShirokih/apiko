import { Navigate, useLocation } from 'react-router-dom';
import { authSelectors } from 'redux/authSelectors';
import { useSelector } from 'react-redux';

const RequireAuth = ({ children }) => {
  const location = useLocation();
  const loggedIn = useSelector(authSelectors.getloggedIn);

  if (!loggedIn) {
    return <Navigate to="/" state={{ from: location }} />;
  }

  return children;
};

export { RequireAuth };
