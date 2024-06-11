import AuthContext from '@context/auth-context';

type AuthContextProviderProps = {
  children: React.ReactNode;
};

const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const authContextValues = {
    accessToken: null,
    connected: false,
    email: null,
    id: null,
  };
  return <AuthContext.Provider value={authContextValues}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
