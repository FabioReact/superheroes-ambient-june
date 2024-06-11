import { useRef, useState } from 'react';
import { getHeroesByName } from '../../api/heroes';
import { Hero } from '../../types/hero';
import HeroCard from '../../components/HeroCard/HeroCard';

// http://localhost:4000/heroes?name_like={hero}

const Search = () => {
  const heroNameRef = useRef<HTMLInputElement>(null);
  const [heroes, setHeroes] = useState<Hero[]>([]);

  const onSubmitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    // Optionnal Chaining
    const heroName = heroNameRef.current?.value;
    const data = await getHeroesByName(heroName!);
    setHeroes(data);
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
        <div className='flex justify-center flex-wrap gap-4'>
          {heroes.map((hero) => (
            <HeroCard key={hero.id} hero={hero} />
          ))}
        </div>
      </form>
    </section>
  );
};

export default Search;
