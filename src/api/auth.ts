import axios, { AxiosResponse } from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL;

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
    `${BASE_URL}/register`,
    {
      email, // equivalent à email: email
      password,
    },
  );
  return response.data;
};

const loginUser = async (email: string, password: string) => {
  console.log(BASE_URL)
  const response = await axios.post<RegisterUserBody, AxiosResponse<RegisterUserRepsonse>>(
    `${BASE_URL}/login`,
    {
      email,
      password,
    },
  );
  return response.data;
};

export { registerUser, loginUser };
