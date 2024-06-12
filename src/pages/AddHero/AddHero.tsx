import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

const schema = z.object({
  name: z.string(),
});

type Inputs = z.infer<typeof schema>;

const AddHero = () => {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmitHandler: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <section>
      <h1>Add new Hero</h1>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <fieldset>
          <label htmlFor='name'>Name:</label>
          <input type='text' id='name' {...register('name')} />
        </fieldset>
        <button>Submit</button>
      </form>
    </section>
  );
};

export default AddHero;
