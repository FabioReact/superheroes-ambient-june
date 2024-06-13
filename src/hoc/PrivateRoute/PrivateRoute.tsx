import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';

const PrivateRoute = () => {
  const connected = useAppSelector((state) => state.auth.connected);
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
