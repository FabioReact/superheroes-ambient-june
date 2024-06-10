import { useEffect, useState } from 'react';
import { Hero } from '../../types/hero';
import { getHeroes } from '../../api/heroes';
import { Loader } from '../../components/Loader/Loader';
import HeroCard from '../../components/HeroCard/HeroCard';

const Heroes = () => {
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getHeroes()
      .then((data) => {
        setHeroes(data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  return (
    <section>
      <h1 className='text-center'>Heroes</h1>
      {isLoading && <Loader />}
      <ul className='flex flex-wrap justify-center gap-4'>
        {heroes.map((hero) => (
          <li key={hero.id}>
            <HeroCard hero={hero} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Heroes;
