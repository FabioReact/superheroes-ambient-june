import { loginUser } from '@api/auth';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { useAppDispatch } from '../../redux/hooks';
import { onAuthenticate } from '../../redux/reducers/authSlice';

const schema = z.object({
  email: z.string().email(),
  password: z.string(),
});

type Inputs = z.infer<typeof schema>;

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm<Inputs>();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const onSubmitHandler: SubmitHandler<Inputs> = async ({ email, password }) => {
    const { accessToken, user } = await loginUser(email, password);
    // onAuthenticate(accessToken, user);
    dispatch(onAuthenticate({ accessToken, user }));
    navigate(from, { replace: true });
  };

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <fieldset>
          <label htmlFor='email'>Email:</label>
          <input type='email' id='email' {...register('email')} />
        </fieldset>
        <fieldset>
          <label htmlFor='password'>Password:</label>
          <input type='password' id='password' {...register('password')} />
        </fieldset>
        <button>Login</button>
      </form>
    </section>
  );
};

export default Login;
