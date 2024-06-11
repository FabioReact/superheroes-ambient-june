import { useRef, useState } from 'react';
import { getHeroesByName } from '../../api/heroes';
import { Hero } from '../../types/hero';
import HeroCard from '../../components/HeroCard/HeroCard';
import { Loader } from '../../components/Loader/Loader';

// http://localhost:4000/heroes?name_like={hero}

const Search = () => {
  const heroNameRef = useRef<HTMLInputElement>(null);
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const onSubmitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    // Optionnal Chaining
    const heroName = heroNameRef.current?.value;
    setLoading(true);
    try {
      setIsError(false);
      setHeroes([]);
      const data = await getHeroesByName(heroName!);
      setHeroes(data);
    } catch (e) {
      setIsError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <h1>Search Hero</h1>
      <form onSubmit={onSubmitHandler}>
        <fieldset>
          <label htmlFor='hero-name'>Hero:</label>
          <input ref={heroNameRef} type='text' id='hero-name' name='hero-name' />
        </fieldset>
        <button>Search</button>
        {isError && <p className='text-red-500'>An error happened while fetching</p>}
        <div className='flex justify-center flex-wrap gap-4'>
          {loading ? <Loader /> : heroes.map((hero) => <HeroCard key={hero.id} hero={hero} />)}
        </div>
      </form>
    </section>
  );
};

export default Search;
