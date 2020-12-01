import { Box, Flex, useColorModeValue } from '@chakra-ui/react'

import { useLayout } from '~/context/layout'

import Footer from './Footer'
import Header from './Header'

function MainContent({ children }: WithChildren) {
  const { sideBarMargin } = useLayout()

  return (
    <Flex
      pl={sideBarMargin}
      w="100%"
      direction="column"
      minH="100vh"
      transition="padding-left 450ms ease"
    >
      <Header />
      <Box flex={1} pt="65px" bg={useColorModeValue('gray.100', 'gray.900')}>
        {children}
      </Box>
      <Footer />
    </Flex>
  )
}

export default MainContent
