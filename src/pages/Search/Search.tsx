import { useRef, useState } from 'react';
import { getHeroesByFilters } from '../../api/heroes';
import { Hero } from '../../types/hero';
import HeroCard from '../../components/HeroCard/HeroCard';
import { Loader } from '../../components/Loader/Loader';

const Search = () => {
  const heroNameRef = useRef<HTMLInputElement>(null);
  const intelligenceRef = useRef<HTMLInputElement>(null);
  const combatRef = useRef<HTMLInputElement>(null);
  const durabilityRef = useRef<HTMLInputElement>(null);
  const powerRef = useRef<HTMLInputElement>(null);
  const speedRef = useRef<HTMLInputElement>(null);
  const strengthRef = useRef<HTMLInputElement>(null);
  const stats = [
    { name: 'intelligence', ref: intelligenceRef },
    { name: 'combat', ref: combatRef },
    { name: 'durability', ref: durabilityRef },
    { name: 'power', ref: powerRef },
    { name: 'speed', ref: speedRef },
    { name: 'strength', ref: strengthRef },
  ];

  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const onSubmitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    // Optionnal Chaining
    const heroName = heroNameRef.current?.value || '';
    const intelligence = intelligenceRef.current?.value || '0';
    const combat = combatRef.current?.value || '0';
    const durability = durabilityRef.current?.value || '0';
    const power = powerRef.current?.value || '0';
    const speed = speedRef.current?.value || '0';
    const strength = strengthRef.current?.value || '0';
    setLoading(true);
    try {
      setIsError(false);
      setHeroes([]);
      // const data = await getHeroesByName(heroName!);
      const data = await getHeroesByFilters({
        name: heroName,
        intelligence,
        speed,
        combat,
        durability,
        power,
        strength,
      });
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
        {stats.map((stat) => (
          <fieldset>
            <label htmlFor={stat.name}>{stat.name}:</label>
            <input ref={stat.ref} type='range' id={stat.name} name={stat.name} defaultValue='0' />
          </fieldset>
        ))}
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
