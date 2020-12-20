import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import {
  Button,
  Text,
  Flex,
  useColorMode,
  useColorModeValue,
  VStack
} from '@chakra-ui/react'

import Image from 'next/image'

function SideBar() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <VStack
      zIndex={999}
      w={320}
      minH="100vh"
      py={4}
      position="fixed"
      direction="column"
      overflow="hidden"
      shadow="base"
      bg={useColorModeValue('white', 'gray.800')}
      borderRight="1px solid"
      borderRightColor={useColorModeValue('gray.200', 'whiteAlpha.100')}
      transition="width 450ms ease, transform 450ms ease"
      transform={{
        base: 'translateX(-100%)',
        lg: 'translateX(0)'
      }}
    >
      <Flex px={6} justify="center" align="center">
        <div style={{ alignItems: 'center', display: 'flex' }}>
          <Image src="/logo.svg" alt="App Logo" width={200} height={40} />
        </div>
      </Flex>
      <Flex justify="center" w="100%" px={6}>
        <Button
          w="100%"
          justifyContent="flex-start"
          px={3}
          onClick={toggleColorMode}
          leftIcon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          color={useColorModeValue('brand.500', 'whiteAlpha.800')}
        >
          <Text>Tema {colorMode === 'light' ? 'Escuro' : 'Claro'}</Text>
        </Button>
      </Flex>
    </VStack>
  )
}

export default SideBar
