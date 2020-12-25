/* eslint-disable multiline-ternary */
import { useMemo } from 'react'

import { Accordion, Flex, Stack } from '@chakra-ui/react'

import Image from 'next/image'
import { useRouter } from 'next/router'

import { useValhalla } from '~/context/valhalla'

import MenuHeader from '../MenuHeader'
import MenuItem from '../MenuItem'

function SideBarContent() {
  const { menu } = useValhalla()
  const { pathname } = useRouter()

  const accordionIndex = useMemo(() => {
    const hasSubmenu = menu.filter(m => m.submenu)
    const indexes = hasSubmenu
      .map(({ submenu }, index) => {
        if (submenu.filter(m => m.href === pathname).length) {
          return index
        }
      })
      .filter(i => i)

    return indexes
  }, [menu, pathname])

  return (
    <Stack as="ul" my={4}>
      <Flex as="li" align="center" justify="center" px={6} mb={4}>
        <Flex align="center">
          <Image alt="App Logo" height={40} src="/logo.svg" width={200} />
        </Flex>
      </Flex>
      <Accordion allowToggle defaultIndex={accordionIndex}>
        {menu.map((item, i) =>
          item.isHeader ? (
            <MenuHeader {...item} key={i} />
          ) : (
            <MenuItem {...item} key={i} />
          )
        )}
      </Accordion>
    </Stack>
  )
}

export default SideBarContent
