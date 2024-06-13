import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { router } from './router';
import AuthContextProvider from './hoc/AuthContextProvider/AuthContextProvider';
import { Suspense } from 'react';
import { Loader } from '@components/Loader/Loader';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './redux/store';

const queryClient = new QueryClient();
// eslint-disable-next-line @typescript-eslint/no-explicit-any

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <ReduxProvider store={store}>
        <QueryClientProvider client={queryClient}>
          <AuthContextProvider>
            <RouterProvider router={router}/>
          </AuthContextProvider>
        </QueryClientProvider>
      </ReduxProvider>
    </Suspense>
  );
}

export default App;
