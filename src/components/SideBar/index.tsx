import { useEffect } from 'react'

import { Flex, useColorModeValue } from '@chakra-ui/react'

import { motion, useAnimation, Variants } from 'framer-motion'

import { useLayout } from '~/context/layout'
import { useValhalla } from '~/context/valhalla'

import SideBarContent from './SideBarContent'

const MotionFlex = motion.custom(Flex)

function SideBar() {
  const { isLessThanLG } = useLayout()
  const { sidebar } = useValhalla()
  const controls = useAnimation()

  const sidebarVariants: Variants = {
    active: {
      x: 0
    },
    inactive: {
      x: -sidebar.width
    }
  }

  useEffect(() => {
    controls.start(isLessThanLG ? 'inactive' : 'active')
  }, [controls, isLessThanLG])

  return (
    <MotionFlex
      transition={{ type: 'spring', duration: 0.45 }}
      animate={controls}
      variants={sidebarVariants}
      w={sidebar.width}
      zIndex={999}
      top={0}
      bottom={0}
      position="fixed"
      direction="column"
      overflow="auto"
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
