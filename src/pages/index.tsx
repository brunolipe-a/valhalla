import { useCallback, useEffect, useMemo, useState } from 'react'

import { HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Flex,
  IconButton,
  useBreakpointValue,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react'

import Head from 'next/head'

import { AnimatePresence, motion } from 'framer-motion'

const MotionBox = motion.custom(Box)

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
      <Flex
        w={sideNavWidth}
        minH="100vh"
        zIndex={999}
        overflow="hidden"
        shadow="base"
        align="center"
        direction="column"
        py={4}
        bg={useColorModeValue('white', 'gray.800')}
        transform={{
          base: openSideNav ? 'translateX(0)' : 'translateX(-100%)',
          lg: 'translateX(0)'
        }}
        position="fixed"
        transition="width 450ms ease, transform 450ms ease"
        borderRight="1px solid"
        borderRightColor={useColorModeValue('gray.200', 'whiteAlpha.100')}
      >
        <Flex justify="center" wrap="wrap">
          <IconButton
            aria-label="Toggle Theme"
            onClick={toggleColorMode}
            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          />
          <IconButton
            aria-label="Hamburger"
            icon={<HamburgerIcon />}
            onClick={toggleSideNav}
          />
        </Flex>
      </Flex>
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
            bg="rgba(16,25,36,0.4)"
            onClick={toggleSideNav}
          />
        )}
      </AnimatePresence>
      {overlay && (
        <MotionBox
          display={{ base: 'block', lg: 'none' }}
          position="fixed"
          top={0}
          right={0}
          bottom={0}
          left={0}
          zIndex={900}
          bg="rgba(16,25,36,0.4)"
          onClick={toggleSideNav}
        />
      )}
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
