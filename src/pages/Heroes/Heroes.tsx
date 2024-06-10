import { useEffect, useState } from 'react';
import { Hero } from '../../types/hero';
import { getHeroes } from '../../api/heroes';

const Heroes = () => {
  const [heroes, setHeroes] = useState<Hero[]>([]);
  useEffect(() => {
    getHeroes().then((data) => {
      setHeroes(data);
    });
  }, []);
  return (
    <section>
      <h1>Heroes</h1>
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
