import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducers/counterSlice';
import heroManagerReducer from './reducers/heroesSlice';
import authReducer from './reducers/authSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    heroManager: heroManagerReducer,
    auth: authReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
