import { getHeroById } from '@api/heroes';
import { useEffect, useState } from 'react';
import { Hero } from 'types/hero';

export const useGetHeroById = (id: string) => {
  const [hero, setHero] = useState<Hero | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchHero = async () => {
      try {
        const hero = await getHeroById(id);
        setHero(hero);
      } catch (e) {
        setError('Hero not found');
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchHero();
  }, [id]);

  return {
    hero,
    isLoading,
    error,
    isError,
  };
};
