import { useEffect } from 'react'

import { HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  IconButton,
  Text,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  VStack
} from '@chakra-ui/react'

import Image from 'next/image'

import { useLayout } from '~/context/layout'

function Header() {
  const { sideBarMargin } = useLayout()

  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure()

  const { isLessThanLG } = useLayout()

  useEffect(() => {
    if (!isLessThanLG && isOpen) {
      console.log('opa')
      onToggle()
    }
  })

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
        variant="ghost"
        icon={<HamburgerIcon boxSize={6} />}
        onClick={onOpen}
      />
      <Drawer
        placement={'left'}
        preserveScrollBarGap
        onClose={onClose}
        isOpen={!isLessThanLG ? false : isOpen}
      >
        <DrawerOverlay>
          <DrawerContent
            borderRightColor={useColorModeValue('gray.200', 'whiteAlpha.100')}
          >
            <DrawerBody as={VStack}>
              <Image src="/logo.svg" alt="App Logo" width={200} height={40} />
              <Button
                w="100%"
                justifyContent="flex-start"
                px={3}
                onClick={toggleColorMode}
                leftIcon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                color={useColorModeValue('brand.500', 'whiteAlpha.800')}
              >
                <Text>Tema {colorMode === 'light' ? 'Escuro' : 'Claro'}</Text>
              </Button>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Flex>
  )
}

export default Header
