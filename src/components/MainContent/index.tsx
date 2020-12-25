import { Box, Flex, useColorModeValue } from '@chakra-ui/react'

import { motion } from 'framer-motion'

import { useLayout } from '~/context/layout'

import Footer from './Footer'
import Header from './Header'

const MotionFlex = motion.custom(Flex)

function MainContent({ children }: WithChildren) {
  const { sideBarMargin } = useLayout()

  return (
    <MotionFlex
      initial={{ paddingLeft: `${sideBarMargin}px` }}
      animate={{ paddingLeft: `${sideBarMargin}px` }}
      transition={{ type: 'spring', duration: 0.45 }}
      direction="column"
      minH="100vh"
      w="100%"
    >
      <Header />
      <Box bg={useColorModeValue('gray.100', 'gray.900')} flex={1} pt="65px">
        {children}
      </Box>
      <Footer />
    </MotionFlex>
  )
}

export default MainContent
