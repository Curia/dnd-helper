import type { AppProps } from 'next/app'

import { AppProvider } from '@/components/appProvider'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  )
}
