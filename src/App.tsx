import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { router } from './router';
import AuthContextProvider from './hoc/AuthContextProvider/AuthContextProvider';
import { Suspense } from 'react';
import { Loader } from '@components/Loader/Loader';

const queryClient = new QueryClient();

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <QueryClientProvider client={queryClient}>
        <AuthContextProvider>
          <RouterProvider router={router} />
        </AuthContextProvider>
      </QueryClientProvider>
    </Suspense>
  );
}

export default App;
