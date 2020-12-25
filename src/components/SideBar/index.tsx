import { useEffect } from 'react'

import { Flex, useColorModeValue } from '@chakra-ui/react'

import { motion, useAnimation, Variants } from 'framer-motion'

import { useLayout } from '~/context/layout'

import SideBarContent from './SideBarContent'

const MotionFlex = motion.custom(Flex)

const SIDEBAR_WIDTH = 320

const sidebarVariants: Variants = {
  active: {
    x: 0
  },
  inactive: {
    x: -SIDEBAR_WIDTH
  }
}

function SideBar() {
  const { isLessThanLG } = useLayout()
  const controls = useAnimation()

  useEffect(() => {
    controls.start(isLessThanLG ? 'inactive' : 'active')
  }, [controls, isLessThanLG])

  return (
    <MotionFlex
      transition={{ type: 'spring', duration: 0.45 }}
      animate={controls}
      variants={sidebarVariants}
      w={SIDEBAR_WIDTH}
      zIndex={999}
      minH="100vh"
      position="fixed"
      direction="column"
      overflow="hidden"
      shadow="base"
      bg={useColorModeValue('white', 'gray.800')}
      borderRight="1px solid"
      borderRightColor={useColorModeValue('gray.200', 'whiteAlpha.100')}
    >
      <SideBarContent />
    </MotionFlex>
  )
}

export default SideBar
