import { createContext, useContext } from 'react';
import { UserType } from 'types/user';

const AuthContext = createContext<{
  accessToken: string | null;
  connected: boolean;
  email: string | null;
  id: number | null;
  onAuthenticate: (accessToken: string, user: UserType) => void;
  onLogout: () => void;
}>(null!);

const useAuthContext = () => useContext(AuthContext);

export { AuthContext as default, useAuthContext };
