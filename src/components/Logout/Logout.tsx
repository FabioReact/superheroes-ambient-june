import { Navigate } from 'react-router-dom';
import { useAppDispatch } from '../../redux/hooks';
import { onLogout } from '../../redux/reducers/authSlice';

const Logout = () => {
  const dispatch = useAppDispatch();
  dispatch(onLogout());
  return <Navigate to='/login' />;
};

export default Logout;
