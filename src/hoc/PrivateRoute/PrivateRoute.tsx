import { useAuthContext } from '@context/auth-context';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const PrivateRoute = () => {
  const { connected } = useAuthContext();
  const location = useLocation();

  if (!connected)
    return (
      <Navigate
        to='/login'
        state={{
          from: location,
        }}
      />
    );

  return <Outlet />;
};

export default PrivateRoute;
