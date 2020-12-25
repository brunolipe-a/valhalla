import { Flex, Heading } from '@chakra-ui/react'

import Main from '~/layouts/Main'

export default function Home() {
  return (
    <Main title="Teste">
      <Flex p={8}>
        <Heading>Teste</Heading>
      </Flex>
    </Main>
  )
}
