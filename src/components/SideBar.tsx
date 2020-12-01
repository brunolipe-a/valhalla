import {
  HamburgerIcon,
  MoonIcon,
  SunIcon,
  ArrowLeftIcon
} from '@chakra-ui/icons'
import {
  Button,
  Text,
  Flex,
  IconButton,
  useColorMode,
  useColorModeValue,
  VStack
} from '@chakra-ui/react'

import Image from 'next/image'

import { AnimatePresence, motion } from 'framer-motion'

import { useLayout } from '~/context/layout'

const MotionText = motion.custom(Text)

function SideBar() {
  const { colorMode, toggleColorMode } = useColorMode()

  const {
    sideBarWidth,
    openSideBar,
    toggleSideBar,
    lgBreakingPoint
  } = useLayout()

  return (
    <VStack
      zIndex={999}
      w={sideBarWidth}
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
        base: openSideBar ? 'translateX(0)' : 'translateX(-100%)',
        lg: 'translateX(0)'
      }}
    >
      <Flex px={6} justify="center" align="center">
        <AnimatePresence>
          {openSideBar && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{ alignItems: 'center', display: 'flex' }}
            >
              <Image src="/logo.svg" alt="App Logo" width="auto" height={40} />
            </motion.div>
          )}
        </AnimatePresence>

        <IconButton
          aria-label="Toggle SideBar"
          rounded="full"
          ml={openSideBar ? 8 : 0}
          icon={!lgBreakingPoint ? <HamburgerIcon /> : <ArrowLeftIcon />}
          onClick={toggleSideBar}
        />
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
          <MotionText animate={{ opacity: +openSideBar }}>
            Tema {colorMode === 'light' ? 'Escuro' : 'Claro'}
          </MotionText>
        </Button>
      </Flex>
    </VStack>
  )
}

export default SideBar
