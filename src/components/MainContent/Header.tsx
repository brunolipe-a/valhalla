import { useEffect } from 'react'

import { HamburgerIcon } from '@chakra-ui/icons'
import {
  Flex,
  IconButton,
  useColorModeValue,
  useDisclosure
} from '@chakra-ui/react'

import { motion } from 'framer-motion'

import { useLayout } from '~/context/layout'

import ValhallaDrawer from '../SideBar/ValhallaDrawer'

const MotionFlex = motion.custom(Flex)

function Header() {
  const { sideBarMargin, isLessThanLG } = useLayout()

  const { isOpen, onOpen, onClose, onToggle } = useDisclosure()

  useEffect(() => {
    if (!isLessThanLG && isOpen) {
      onToggle()
    }
  })

  return (
    <MotionFlex
      // initial={{ left: sideBarMargin }}
      // animate={{ left: sideBarMargin }}
      // transition={{ type: 'spring', duration: 0.45 }}
      left={sideBarMargin}
      align="center"
      h={65}
      minW={320}
      position="fixed"
      top={0}
      right={0}
      px={8}
      shadow="base"
      zIndex={800}
      bg={useColorModeValue('white', 'gray.800')}
      borderBottom="1px solid"
      borderBottomColor={useColorModeValue('gray.200', 'whiteAlpha.100')}
    >
      <IconButton
        aria-label="Hamburger"
        display={{ base: 'block', lg: 'none' }}
        icon={<HamburgerIcon boxSize={6} />}
        variant="ghost"
        onClick={onOpen}
      />
      <ValhallaDrawer isOpen={isOpen} onClose={onClose} />
    </MotionFlex>
  )
}

export default Header
