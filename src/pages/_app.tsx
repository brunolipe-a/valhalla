import { AppProps } from 'next/app'

import { AppProvider } from '~/context'
import { LayoutProvider } from '~/context/layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <LayoutProvider>
        <Component {...pageProps} />
      </LayoutProvider>
    </AppProvider>
  )
}

export default MyApp
