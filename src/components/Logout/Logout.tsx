import { useAuthContext } from '@context/auth-context';
import { Navigate } from 'react-router-dom';

const Logout = () => {
  const { onLogout } = useAuthContext();
  onLogout();
  return <Navigate to='/login' />;
};

export default Logout;
