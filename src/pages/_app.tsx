import { AppProps } from 'next/app'

import { AppProvider } from '~/context'
import { ValhallaProvider } from '~/context/valhalla'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <ValhallaProvider>
        <Component {...pageProps} />
      </ValhallaProvider>
    </AppProvider>
  )
}

export default MyApp
