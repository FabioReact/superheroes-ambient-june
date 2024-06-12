import { AddHeroParams, addHero } from '@api/heroes';
import { useMutation } from '@tanstack/react-query';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

const schema = z.object({
  name: z.string(),
});

type Inputs = z.infer<typeof schema>;

const AddHero = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const { mutate, data, isPending, isSuccess } = useMutation({
    mutationFn: (params: AddHeroParams) => addHero(params),
  });

  const onSubmitHandler: SubmitHandler<Inputs> = (formData) => {
    mutate(formData);
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
        {isPending && <p>Adding Hero...</p>}
        {isSuccess && <pre>{JSON.stringify(data, null, 2)}</pre>}
      </form>
      <div></div>
    </section>
  );
};

export default AddHero;
