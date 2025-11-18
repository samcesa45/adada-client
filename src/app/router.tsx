import { useQueryClient, type QueryClient } from '@tanstack/react-query';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from './routes/error';
import { paths } from '@/config/paths';
import { useMemo } from 'react';

export const createAppRouter = (_queryClient: QueryClient) =>
  createBrowserRouter([
    {
      path: paths.home.path,
      lazy: async () => {
        const { HomeRoute } = await import('./routes/landing/home');
        return { Component: HomeRoute };
      },
      errorElement: <ErrorBoundary />,
    },
    {
      path: paths.about.path,
      lazy: async () => {
        const { AboutRoute } = await import('./routes/landing/about/page');
        return { Component: AboutRoute };
      },
      errorElement: <ErrorBoundary />,
    },
    {
      path: paths.programs.path,
      lazy: async () => {
        const { ProgramsRoute } = await import(
          './routes/landing/programs/page'
        );
        return { Component: ProgramsRoute };
      },
      errorElement: <ErrorBoundary />,
    },
    {
      path: paths.ambassadors.path,
      lazy: async () => {
        const { AmbassadorsRoute } = await import(
          './routes/landing/ambassador/page'
        );
        return { Component: AmbassadorsRoute };
      },
      errorElement: <ErrorBoundary />,
    },
  ]);

export const AppRouter = () => {
  const queryClient = useQueryClient();
  const router = useMemo(() => createAppRouter(queryClient), [queryClient]);
  return <RouterProvider router={router} />;
};
