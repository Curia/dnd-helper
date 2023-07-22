import React from 'react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { AppProvider } from '@/components/appProvider';
import { NProgressNextRouter } from '@saas-ui/nprogress';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <AppProvider>
      <NProgressNextRouter router={router} />
      <Component {...pageProps} />
    </AppProvider>
  );
}
