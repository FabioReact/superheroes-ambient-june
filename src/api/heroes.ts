import { Hero } from '../types/hero';

const getHeroes = async (): Promise<Hero[]> => {
  const response = await fetch('http://localhost:4000/heroes');
  const data = await response.json();
  return data;
};

const getHeroById = async (id: string): Promise<Hero> => {
  const response = await fetch(`http://localhost:4000/heroes/${id}`);
  if (response.status !== 200) throw new Error('No Hero');
  const data = await response.json();
  return data;
};

const getHeroesByLetter = async (
  letter: string,
  options?: {
    signal?: AbortSignal;
  },
): Promise<Hero[]> => {
  const response = await fetch(`http://localhost:4000/heroes?name_like=^${letter}`, {
    signal: options?.signal,
  });
  const data = await response.json();
  return data;
};

const getHeroesByName = async (name: string): Promise<Array<Hero>> => {
  const response = await fetch(`http://localhost:4000/heroes?name_like=${name}`);
  if (!response.ok) throw new Error('Not a valid response');
  return response.json();
};

const getHeroesByFilters = async (filters: {
  name: string;
  intelligence: string;
  combat: string;
  durability: string;
  power: string;
  speed: string;
  strength: string;
}): Promise<Hero[]> => {
  const params = new URLSearchParams({
    name_like: filters.name,
    'powerstats.intelligence_gte': filters.intelligence,
    'powerstats.combat_gte': filters.combat,
    'powerstats.durability_gte': filters.durability,
    'powerstats.power_gte': filters.power,
    'powerstats.speed_gte': filters.speed,
    'powerstats.strength_gte': filters.strength,
  });
  const response = await fetch(`http://localhost:4000/heroes?${params}`);
  if (!response.ok) throw new Error('Not a valid response');
  return response.json();
};

// http://localhost:4000/heroes?name_like=man&powerstats.intelligence_gte=50

export { getHeroes, getHeroesByLetter, getHeroesByName, getHeroesByFilters, getHeroById };
