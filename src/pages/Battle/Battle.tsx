import { useState } from 'react';
import { Hero } from 'types/hero';
import SelectPlayer from './SelectPlayer';
import HeroCard from '@components/HeroCard/HeroCard';
import { fight } from '../../utils/fight';

const Battle = () => {
  const [first, setFirst] = useState<Hero | null>(null);
  const [second, setSecond] = useState<Hero | null>(null);
  const [winner, setWinner] = useState<Hero | null>(null);

  const onFight = () => {
    if (first && second) {
      const result = fight(first, second);
      setWinner(result);
    }
  };

  const onReset = () => {
    setFirst(null);
    setSecond(null);
    setWinner(null);
  };

  return (
    <section className='flex flex-col items-center'>
      <h1>Battle</h1>
      {first && second && <button onClick={onFight}>Battle</button>}
      {winner && (
        <>
          <HeroCard hero={winner} />
          <button onClick={onReset}>Reset</button>
        </>
      )}
      {(!winner) && (
        <div className='flex justify-center gap-40'>
          <SelectPlayer label='first' onSelectHero={setFirst} />
          <SelectPlayer label='second' onSelectHero={setSecond} />
        </div>
      )}
    </section>
  );
};

export default Battle;
