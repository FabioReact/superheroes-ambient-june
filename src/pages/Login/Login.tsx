import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

const schema = z.object({
  email: z.string().email(),
  password: z.string(),
});

type Inputs = z.infer<typeof schema>;

const Login = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmitHandler: SubmitHandler<Inputs> = (data) => {
    console.log(data);
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
