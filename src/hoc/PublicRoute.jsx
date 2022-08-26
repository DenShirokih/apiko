import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/authSelectors';

export const PublicRoute = ({ children }) => {
  const location = useLocation();
  const loggedIn = useSelector(authSelectors.getloggedIn);

  if (loggedIn) {
    return <Navigate to="/" state={{ from: location }} />;
  }

  return children;
};
