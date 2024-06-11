import AuthContext from '@context/auth-context';
import { useState } from 'react';
import { UserType } from 'types/user';

type AuthContextProviderProps = {
  children: React.ReactNode;
};

const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [connected, setConnected] = useState(false);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [user, setUser] = useState<UserType>({ email: null, id: null });

  const onAuthenticate = (accessToken: string, user: UserType) => {
    setConnected(true);
    setAccessToken(accessToken);
    setUser(user);
  };

  const authContextValues = {
    accessToken,
    connected,
    email: user.email,
    id: user.id,
    onAuthenticate,
  };
  return <AuthContext.Provider value={authContextValues}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
