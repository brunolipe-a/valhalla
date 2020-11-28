import { useCallback, useEffect, useMemo, useState } from 'react'

import {
  HamburgerIcon,
  MoonIcon,
  SunIcon,
  ArrowForwardIcon
} from '@chakra-ui/icons'
import {
  Box,
  Button,
  Text,
  Flex,
  IconButton,
  useBreakpointValue,
  useColorMode,
  useColorModeValue,
  VStack
} from '@chakra-ui/react'

import Head from 'next/head'
import Image from 'next/image'

import { AnimatePresence, motion } from 'framer-motion'

const MotionBox = motion.custom(Box)
const MotionText = motion.custom(Text)

export default function Home() {
  const [openSideNav, setOpenSideNav] = useState(true)
  const [overlay, setOverlay] = useState(false)
  const lgBreakingPoint = useBreakpointValue({ base: true, lg: false })

  const { colorMode, toggleColorMode } = useColorMode()

  const sideNavWidth = useMemo(() => (openSideNav ? 290 : 74), [openSideNav])
  const sideNavMargin = useMemo(() => (lgBreakingPoint ? 0 : sideNavWidth), [
    sideNavWidth,
    lgBreakingPoint
  ])

  useEffect(() => {
    setOpenSideNav(!lgBreakingPoint)
    setOverlay(false)
  }, [lgBreakingPoint])

  const toggleSideNav = useCallback(() => {
    if (lgBreakingPoint) {
      setOverlay(!openSideNav)
    }
    setOpenSideNav(!openSideNav)
  }, [lgBreakingPoint, openSideNav])

  return (
    <Flex position="relative">
      <Head>
        <title>Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <VStack
        zIndex={999}
        w={sideNavWidth}
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
          base: openSideNav ? 'translateX(0)' : 'translateX(-100%)',
          lg: 'translateX(0)'
        }}
      >
        <Flex px={6} justify="center" align="center">
          <AnimatePresence>
            {openSideNav && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{ alignItems: 'center', display: 'flex' }}
              >
                <Image
                  src="/logo.svg"
                  alt="App Icon"
                  width="auto"
                  height={40}
                />
              </motion.div>
            )}
          </AnimatePresence>

          <IconButton
            aria-label="Hamburger"
            rounded="full"
            ml={openSideNav ? 8 : 0}
            icon={!lgBreakingPoint ? <HamburgerIcon /> : <ArrowForwardIcon />}
            onClick={toggleSideNav}
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
            <MotionText animate={{ opacity: +openSideNav }}>
              Tema {colorMode === 'light' ? 'Escuro' : 'Claro'}
            </MotionText>
          </Button>
        </Flex>
      </VStack>
      <AnimatePresence>
        {overlay && (
          <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            display={{ base: 'block', lg: 'none' }}
            position="fixed"
            top={0}
            right={0}
            bottom={0}
            left={0}
            zIndex={900}
            bg="blackAlpha.300"
            onClick={toggleSideNav}
          />
        )}
      </AnimatePresence>
      <Flex
        pl={sideNavMargin}
        w="100%"
        direction="column"
        minH="100vh"
        transition="padding-left 450ms ease"
      >
        <Flex
          h={65}
          minW={320}
          zIndex={800}
          position="fixed"
          top={0}
          right={0}
          left={sideNavMargin}
          transition="left 450ms ease"
          bg={useColorModeValue('white', 'gray.800')}
          px={8}
          align="center"
          shadow="base"
          borderBottom="1px solid"
          borderBottomColor={useColorModeValue('gray.200', 'whiteAlpha.100')}
        >
          <IconButton
            display={{ base: 'block', lg: 'none' }}
            aria-label="Hamburger"
            icon={<HamburgerIcon />}
            onClick={toggleSideNav}
          />
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
