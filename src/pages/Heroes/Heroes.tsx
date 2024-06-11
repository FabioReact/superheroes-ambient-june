import { useEffect, useState } from 'react';
import { getHeroesByLetter } from '@api/heroes';
import { Loader } from '../../components/Loader/Loader';
import HeroCard from '../../components/HeroCard/HeroCard';
import LetterListElement from './LetterListElement';
import { arrayOfLetters } from './utils';
import { Hero } from '../../types/hero';

const Heroes = () => {
  const [selectedLetter, setSelectedLetter] = useState('a');
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const onSelectLetter = async (letter: string) => {
    setHeroes([]);
    setIsLoading(true);
    setSelectedLetter(letter);
    const data = await getHeroesByLetter(letter);
    setIsLoading(false);
    setHeroes(data);
  };

  useEffect(() => {
    const controller = new AbortController();
    getHeroesByLetter('a', { signal: controller.signal })
      .then((data) => {
        setHeroes(data);
      })
      .finally(() => {
        setIsLoading(false);
      });
    return () => {
      controller.abort();
    };
  }, []);
  return (
    <section>
      <h1 className='text-center'>Heroes</h1>
      <ul className='flex justify-center gap-2 my-4'>
        {arrayOfLetters.map((letter) => (
          <LetterListElement
            key={letter}
            selected={letter === selectedLetter}
            onClick={() => onSelectLetter(letter)}>
            {letter}
          </LetterListElement>
        ))}
      </ul>
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
