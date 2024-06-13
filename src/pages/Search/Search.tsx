import { useState } from 'react';
import { getHeroesByFilters } from '../../api/heroes';
import { Hero } from '../../types/hero';
import HeroCard from '../../components/HeroCard/HeroCard';
import { Loader } from '../../components/Loader/Loader';
import { SubmitHandler, useForm } from 'react-hook-form';
import Waiting from '@components/Waiting/Waiting';

type Inputs = {
  heroName: string;
  intelligence: string;
  combat: string;
  durability: string;
  power: string;
  speed: string;
  strength: string;
};

const Search = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const stats = ['intelligence', 'combat', 'durability', 'power', 'speed', 'strength'];

  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const onSubmitHandler: SubmitHandler<Inputs> = async ({ heroName: name, ...rest }) => {
    setLoading(true);
    try {
      setIsError(false);
      setHeroes([]);
      const heroes = await getHeroesByFilters({
        name,
        ...rest,
      });
      setHeroes(heroes);
    } catch (e) {
      setIsError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <h1>Search Hero</h1>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <fieldset>
          <label htmlFor='hero-name'>Hero:</label>
          <input type='text' id='hero-name' {...register('heroName')} />
        </fieldset>
        {stats.map((stat) => (
          <fieldset>
            <label htmlFor={stat}>{stat}:</label>
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            <input type='range' id={stat} defaultValue='0' {...register(stat as any)} />
          </fieldset>
        ))}
        <button>Search</button>
        {isError && <p className='text-red-500'>An error happened while fetching</p>}
        <div className='flex justify-center flex-wrap gap-4'>
          <Waiting loading={loading}>
            {heroes.map((hero) => (
              <HeroCard key={hero.id} hero={hero} />
            ))}
          </Waiting>
        </div>
      </form>
    </section>
  );
};

export default Search;
