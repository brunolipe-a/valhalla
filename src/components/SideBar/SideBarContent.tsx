import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Button, Flex, Stack, Text, useColorMode } from '@chakra-ui/react'

import Image from 'next/image'

function SideBarContent() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Stack my={4}>
      <Flex align="center" justify="center" px={6}>
        <Flex align="center">
          <Image alt="App Logo" height={40} src="/logo.svg" width={200} />
        </Flex>
      </Flex>
      <Flex justify="center" px={6} w="100%">
        <Button
          justifyContent="flex-start"
          leftIcon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          px={3}
          w="100%"
          onClick={toggleColorMode}
        >
          <Text>Tema {colorMode === 'light' ? 'Escuro' : 'Claro'}</Text>
        </Button>
      </Flex>
    </Stack>
  )
}

export default SideBarContent
