import { registerUser } from '@api/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { useAppDispatch } from '../../redux/hooks';
import { onAuthenticate } from '../../redux/reducers/authSlice';

const schema = z
  .object({
    email: z.string().email('Not a valid').min(8, 'Email shoud be at least 8 characters long'),
    password: z.string().min(6, 'Password shoud be at least 6 characters long'),
    passwordConfirmation: z.string(),
  })
  .refine((fields) => fields.password === fields.passwordConfirmation, {
    message: 'Password should match',
    path: ['passwordConfirmation'],
  });

type Inputs = z.infer<typeof schema>;

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ resolver: zodResolver(schema) });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { mutateAsync } = useMutation({
    mutationFn: (params: { email: string; password: string }) =>
      registerUser(params.email, params.password),
  });

  const onSubmitHandler: SubmitHandler<Inputs> = async ({ email, password }) => {
    const data = await mutateAsync({ email, password });
    dispatch(
      onAuthenticate({
        accessToken: data.accessToken,
        user: data.user,
      }),
    );
    navigate('/profile');
  };

  return (
    <section>
      <h1>Register</h1>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <fieldset>
          <label htmlFor='email'>Email:</label>
          <input type='email' id='email' {...register('email')} />
          {errors.email && <p className='text-xs text-red-500'>Message: {errors.email.message}</p>}
        </fieldset>
        <fieldset>
          <label htmlFor='password'>Password:</label>
          <input type='password' id='password' {...register('password')} />
          {errors.password && (
            <p className='text-xs text-red-500'>Message: {errors.password.message}</p>
          )}
        </fieldset>
        <fieldset>
          <label htmlFor='passwordConfirmation'>Confirm Password:</label>
          <input type='password' id='passwordConfirmation' {...register('passwordConfirmation')} />
          {errors.passwordConfirmation && (
            <p className='text-xs text-red-500'>Message: {errors.passwordConfirmation.message}</p>
          )}
        </fieldset>
        <button>Register</button>
      </form>
    </section>
  );
};

export default Register;
