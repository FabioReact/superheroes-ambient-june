import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
// import type { RootState } from '../store';
import { Hero } from 'types/hero';

// Define the initial state using that type
// Garder dans le store un tableau de mes heros favoris
const initialState: Hero[] = [];

export const heroManagerSlice = createSlice({
  name: 'heroManager',
  initialState,
  reducers: {
    addHeroToFavorites: (state, action: PayloadAction<Hero>) => {
      const index = state.findIndex((hero) => hero.id === action.payload.id);
      if (index === -1) state.push(action.payload);
    },
    removeHeroFromFavorties: (state, action: PayloadAction<number>) => {
      const index = state.findIndex((hero) => hero.id === action.payload);
      if (index !== -1) {
        state.splice(index);
      }
    },
  },
});

export const { addHeroToFavorites, removeHeroFromFavorties } = heroManagerSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default heroManagerSlice.reducer;
