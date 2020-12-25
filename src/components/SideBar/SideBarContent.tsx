/* eslint-disable multiline-ternary */
import { Accordion, Flex, Stack } from '@chakra-ui/react'

import Image from 'next/image'

import { useValhalla } from '~/context/valhalla'

import MenuHeader from '../MenuHeader'
import MenuItem from '../MenuItem'

function SideBarContent() {
  const { menu } = useValhalla()

  return (
    <Stack as="ul" my={4}>
      <Flex as="li" align="center" justify="center" px={6} mb={4}>
        <Flex align="center">
          <Image alt="App Logo" height={40} src="/logo.svg" width={200} />
        </Flex>
      </Flex>
      <Accordion allowToggle>
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
