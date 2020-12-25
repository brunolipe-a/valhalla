import { Flex, Text, useColorModeValue } from '@chakra-ui/react'

import { MenuItem as MenuItemType } from '~/config/valhalla'

type MenuHeaderProps = MenuItemType

function MenuHeader({ text }: MenuHeaderProps) {
  const headerColor = useColorModeValue('gray.400', 'white')

  return (
    <Flex as="li" w="100%" pt={10} pb={2} px={6}>
      <Text
        as="span"
        letterSpacing="wider"
        lineHeight="base"
        fontSize="xs"
        fontWeight={700}
        color={headerColor}
      >
        {text}
      </Text>
    </Flex>
  )
}

export default MenuHeader
