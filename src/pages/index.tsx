import { Button, Heading, useColorMode } from '@chakra-ui/react'

import Head from 'next/head'

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Heading textStyle="heading">Hello World</Heading>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button>
    </div>
  )
}
