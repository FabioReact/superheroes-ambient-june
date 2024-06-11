import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Heroes from './pages/Heroes/Heroes';
import Layout from './hoc/Layout/Layout';
import Search from './pages/Search/Search';

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
      <Route path='heroes' element={<Heroes />} />
      <Route path='*' element={<div>Oops, you took a wrong turn...</div>} />
    </Route>,
  ),
);

export { router };
