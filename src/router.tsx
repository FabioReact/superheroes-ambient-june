/* eslint-disable react-refresh/only-export-components */
import { lazy } from 'react';
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Heroes from './pages/Heroes/Heroes';
import Layout from './hoc/Layout/Layout';
import Search from './pages/Search/Search';
import Register from './pages/Register/Register';
import Login from '@pages/Login/Login';
import Profile from '@pages/Profile/Profile';
import PrivateRoute from './hoc/PrivateRoute/PrivateRoute';
import Logout from '@components/Logout/Logout';
import HeroById from '@pages/HeroById/HeroById';
import AddHero from '@pages/AddHero/AddHero';

const Counter = lazy(() => import('@pages/Counter/Counter'));
const UseEffectComponent = lazy(() => import('@pages/UseEffect/UseEffect'));
const Optimizations = lazy(() => import('@pages/Optimizations/Optimizations'));
// import { UseEffectComponent } from './pages/UseEffect/UseEffect';
// const router = createBrowserRouter([
//   {
//     element: <Layout />,
//     children: [
//       {
//         path: '/',
//         element: <div>Home</div>,
//       },
//       {
//         path: 'heroes',
//         element: <Heroes />,
//       },
//     ],
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path='/' element={<div>Home</div>} />
      <Route path='search' element={<Search />} />
      <Route path='heroes'>
        <Route path='' element={<Heroes />} />
        <Route path=':id' element={<HeroById />} />
      </Route>
      <Route path='register' element={<Register />} />
      <Route path='login' element={<Login />} />
      <Route path='logout' element={<Logout />} />
      <Route element={<PrivateRoute />}>
        <Route path='profile' element={<Profile />} />
        <Route path='add-hero' element={<AddHero />} />
      </Route>
      <Route path='useeffect' element={<UseEffectComponent />} />
      <Route path='counter' element={<Counter />} />
      <Route path='optimizations' element={<Optimizations />} />
      <Route path='*' element={<div>Oops, you took a wrong turn...</div>} />
    </Route>,
  ),
);

export { router };
