import {
  Drawer,
  DrawerContent,
  DrawerOverlay,
  useColorModeValue
} from '@chakra-ui/react'

import { useLayout } from '~/context/layout'

import SideBarContent from './SideBarContent'

type ValhallaDrawerProps = {
  onClose(): void
  isOpen: boolean
}

function ValhallaDrawer({ onClose, isOpen }: ValhallaDrawerProps) {
  const { isLessThanLG } = useLayout()

  return (
    <Drawer
      placement="left"
      preserveScrollBarGap
      isOpen={!isLessThanLG ? false : isOpen}
      onClose={onClose}
    >
      <DrawerOverlay>
        <DrawerContent
          bg={useColorModeValue('white', 'gray.800')}
          borderRightColor={useColorModeValue('gray.200', 'whiteAlpha.100')}
        >
          <SideBarContent />
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  )
}

export default ValhallaDrawer
