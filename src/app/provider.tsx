import { QueryClient } from '@tanstack/react-query';
import React, { useState } from 'react';
import { queryConfig } from '../lib/react-query';
import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ErrorBoundary } from 'react-error-boundary';
import { Spinner } from '../components/ui/spinner';
import MainErrorFallback from '@/components/errors/main';

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: queryConfig,
      }),
  );

  const persister = createAsyncStoragePersister({
    storage: window.localStorage,
  });

  return (
    <React.Suspense
      fallback={
        <div className="flex relative h-screen w-full max-w-[1920px] mx-auto items-center justify-center">
          <Spinner />
        </div>
      }
    >
      <ErrorBoundary FallbackComponent={MainErrorFallback}>
        <PersistQueryClientProvider
          client={queryClient}
          persistOptions={{ persister }}
        >
          {import.meta.env.DEV && <ReactQueryDevtools position="top" />}
          {children}
        </PersistQueryClientProvider>
      </ErrorBoundary>
    </React.Suspense>
  );
};
