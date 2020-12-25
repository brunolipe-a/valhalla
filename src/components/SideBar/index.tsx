import { Flex, useColorModeValue } from '@chakra-ui/react'

import { motion } from 'framer-motion'

import { useLayout } from '~/context/layout'
import { useValhalla } from '~/context/valhalla'

import SideBarContent from './SideBarContent'

const MotionFlex = motion.custom(Flex)

function SideBar() {
  const { isLessThanLG } = useLayout()
  const { sidebar } = useValhalla()

  return (
    <MotionFlex
      // transition={{ type: 'spring', duration: 0.45 }}
      // initial={{ x: isLessThanLG ? -sidebar.width : 0 }}
      // animate={{ x: isLessThanLG ? -sidebar.width : 0 }}
      transform={`translateX(${isLessThanLG ? '-100%' : '0'})`}
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
