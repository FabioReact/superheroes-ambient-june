import { useEffect, useState } from 'react';
import { Hero } from '../../types/hero';
import { getHeroes } from '../../api/heroes';
import { Loader } from '../../components/Loader/Loader';

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
      <h1>Heroes</h1>
      {isLoading && <Loader />}
      <ul>
        {heroes.map((hero) => (
          <li key={hero.id}>
            {hero.id} - {hero.name}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Heroes;
