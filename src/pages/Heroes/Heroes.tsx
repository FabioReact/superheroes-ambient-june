import { useEffect, useState } from 'react';
import { Hero } from '../../types/hero';
import { getHeroesByLetter } from '../../api/heroes';
import { Loader } from '../../components/Loader/Loader';
import HeroCard from '../../components/HeroCard/HeroCard';
import LetterListElement from './LetterListElement';
import { arrayOfLetters } from './utils';

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
    getHeroesByLetter('a')
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
      <ul className='flex justify-center gap-2'>
        {arrayOfLetters.map((letter) => (
          <LetterListElement
            key={letter}
            selected={letter === selectedLetter}
            onClick={() => onSelectLetter(letter)}>
            {letter}
          </LetterListElement>
        ))}
      </ul>
      <p>You clicked on letter: {selectedLetter}</p>
      {isLoading && <Loader />}
      <ul className='flex flex-wrap justify-center gap-4'>
        {heroes.map((hero) => (
          <li>
            <HeroCard hero={hero} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Heroes;
