import { createContext, useContext } from 'react';

const AuthContext = createContext<{
  accessToken: string | null;
  connected: boolean;
  email: string | null;
  id: number | null;
}>(null!);

const useAuthContext = () => useContext(AuthContext);

export { AuthContext as default, useAuthContext };
