import { HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Flex,
  IconButton,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react'

import Head from 'next/head'

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Flex position="relative">
      <Head>
        <title>Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex
        w={290}
        minH="100vh"
        zIndex={999}
        overflow="hidden"
        shadow="base"
        px={8}
        py={4}
        position="fixed"
        borderRight="1px solid"
        borderRightColor={useColorModeValue('gray.200', 'whiteAlpha.100')}
      >
        <IconButton
          aria-label="Toggle Theme"
          onClick={toggleColorMode}
          icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        />
      </Flex>
      <Flex pl={290} w="100%" direction="column" minH="100vh">
        <Flex
          h={65}
          minW={320}
          zIndex={800}
          position="fixed"
          top={0}
          right={0}
          left={290}
          bg={useColorModeValue('white', 'gray.800')}
          px={8}
          align="center"
          shadow="base"
          borderBottom="1px solid"
          borderBottomColor={useColorModeValue('gray.200', 'whiteAlpha.100')}
        >
          <IconButton aria-label="Hamburger" icon={<HamburgerIcon />} />
        </Flex>
        <Box w="100%" h={1000} bg={useColorModeValue('gray.100', 'gray.900')} />
        <Box
          w="100%"
          h={65}
          shadow="base"
          borderTop="1px solid"
          borderTopColor={useColorModeValue('gray.200', 'whiteAlpha.100')}
        />
      </Flex>
    </Flex>
  )
}
