import axios, { AxiosResponse } from 'axios';

type RegisterUserBody = {
  email: string;
  password: string;
};

type RegisterUserRepsonse = {
  accessToken: string;
  user: {
    email: string;
    id: number;
  };
};

const registerUser = async (email: string, password: string) => {
  const response = await axios.post<RegisterUserBody, AxiosResponse<RegisterUserRepsonse>>(
    'http://localhost:4000/register',
    {
      email, // equivalent à email: email
      password,
    },
  );
  return response.data;
};

const loginUser = async (email: string, password: string) => {
  const response = await axios.post<RegisterUserBody, AxiosResponse<RegisterUserRepsonse>>(
    'http://localhost:4000/login',
    {
      email,
      password,
    },
  );
  return response.data;
};

export { registerUser, loginUser };
