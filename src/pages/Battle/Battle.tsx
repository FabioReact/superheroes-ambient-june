import { useState } from 'react';
import { Hero } from 'types/hero';
import SelectPlayer from './SelectPlayer';

const Battle = () => {
  const [first, setFirst] = useState<Hero | null>(null);
  const [second, setSecond] = useState<Hero | null>(null);
  return (
    <section className='flex flex-col items-center'>
      <h1>Battle</h1>
      {first && second && <button>Battle</button>}
      <div className='flex justify-center gap-40'>
        <SelectPlayer label='first' onSelectHero={setFirst} />
        <SelectPlayer label='second' onSelectHero={setSecond} />
      </div>
    </section>
  );
};

export default Battle;
