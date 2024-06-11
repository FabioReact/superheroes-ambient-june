const Register = () => {
  return (
    <section>
      <h1>Register</h1>
      <form>
        <fieldset>
          <label htmlFor='email'>Email:</label>
          <input type='email' id='email' name='email' />
        </fieldset>
        <fieldset>
          <label htmlFor='password'>Password:</label>
          <input type='text' id='password' name='password' />
        </fieldset>
        <fieldset>
          <label htmlFor='passwordConfirmation'>Confirm Password:</label>
          <input type='text' id='passwordConfirmation' name='passwordConfirmation' />
        </fieldset>
        <button>Register</button>
      </form>
    </section>
  );
};

export default Register;
