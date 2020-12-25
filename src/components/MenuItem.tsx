import {
  Flex,
  useColorModeValue,
  Link,
  Text,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel
} from '@chakra-ui/react'

import NextLink from 'next/link'

import { MenuItem as MenuItemType } from '~/config/valhalla'

type MenuItemProps = MenuItemType

type ItemProps = MenuItemProps & {
  linkColor: string
  hoverColor: string
}

function ItemMenu({ route, Icon, text, linkColor, hoverColor }: ItemProps) {
  return (
    <Flex as="li" w="100%">
      <NextLink href={route ?? '#'}>
        <Link
          d="flex"
          alignItems="center"
          py={3}
          pl={7}
          pr={10}
          w="100%"
          color={linkColor}
          _hover={{ color: hoverColor, textDecor: 'none' }}
        >
          {Icon}
          <Text
            as="span"
            letterSpacing="wide"
            fontSize="sm"
            ml={4}
            fontWeight={700}
          >
            {text}
          </Text>
        </Link>
      </NextLink>
    </Flex>
  )
}

function AccordionMenu({ hoverColor, linkColor, text, Icon }: ItemProps) {
  return (
    <AccordionItem border={0} color={linkColor}>
      {({ isExpanded }) => (
        <>
          <AccordionButton
            _hover={{ color: hoverColor, textDecor: 'none' }}
            color={isExpanded ? hoverColor : 'inherit'}
            position="relative"
            py={3}
            pl={7}
            pr={10}
          >
            {Icon}
            <Flex
              flex="1"
              letterSpacing="wide"
              fontSize="sm"
              ml={4}
              fontWeight={700}
            >
              {text}
            </Flex>
            <AccordionIcon position="absolute" right="1.25rem" />
          </AccordionButton>
          <AccordionPanel>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa sint
            dicta a, neque molestiae aspernatur. Unde autem ex eveniet dolorum
            explicabo eaque veniam ab nulla quo, velit consequuntur molestiae
            debitis!
          </AccordionPanel>
        </>
      )}
    </AccordionItem>
  )
}

function MenuItem(props: MenuItemProps) {
  const linkColor = useColorModeValue('gray.500', 'whiteAlpha.700')
  const hoverColor = useColorModeValue('brand.500', 'brand.400')

  if (props.submenu) {
    return (
      <AccordionMenu {...props} linkColor={linkColor} hoverColor={hoverColor} />
    )
  }

  return <ItemMenu {...props} linkColor={linkColor} hoverColor={hoverColor} />
}

export default MenuItem
