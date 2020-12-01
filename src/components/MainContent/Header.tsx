import { HamburgerIcon } from '@chakra-ui/icons'
import { Flex, IconButton, useColorModeValue } from '@chakra-ui/react'

import { useLayout } from '~/context/layout'

function Header() {
  const { sideBarMargin, toggleSideBar } = useLayout()

  return (
    <Flex
      h={65}
      minW={320}
      zIndex={800}
      position="fixed"
      top={0}
      right={0}
      left={sideBarMargin}
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
        onClick={toggleSideBar}
      />
    </Flex>
  )
}

export default Header
