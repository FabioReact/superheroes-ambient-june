import { useState } from 'react';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onChangePasswordConfirmation = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordConfirmation(event.target.value);
  };

  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <section>
      <h1>Register</h1>
      <form onSubmit={onSubmitHandler}>
        <fieldset>
          <label htmlFor='email'>Email:</label>
          <input value={email} onChange={onChangeEmail} type='email' id='email' name='email' />
        </fieldset>
        <fieldset>
          <label htmlFor='password'>Password:</label>
          <input
            value={password}
            onChange={onChangePassword}
            type='text'
            id='password'
            name='password'
          />
        </fieldset>
        <fieldset>
          <label htmlFor='passwordConfirmation'>Confirm Password:</label>
          <input
            value={passwordConfirmation}
            onChange={onChangePasswordConfirmation}
            type='text'
            id='passwordConfirmation'
            name='passwordConfirmation'
          />
        </fieldset>
        {passwordConfirmation !== '' && password !== passwordConfirmation && (
          <p className='text-xs text-red-500'>Password must match each other</p>
        )}
        <button>Register</button>
      </form>
    </section>
  );
};

export default Register;
