import { memo } from 'react'

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
import { useRouter } from 'next/router'

import { MenuItem as MenuItemType } from '~/config/valhalla'
import { useValhalla } from '~/context/valhalla'

type MenuItemProps = MenuItemType

type ItemProps = MenuItemProps & {
  linkColor: string
  hoverColor: string
  hoverBg?: string
}

function ItemMenu({
  href,
  Icon,
  text,
  linkColor,
  hoverColor,
  hoverBg
}: ItemProps) {
  const { pathname } = useRouter()

  const isActive = pathname === href

  return (
    <Flex as="li" w="100%">
      <NextLink href={href ?? '#'} passHref>
        <Link
          aria-current={isActive ? 'page' : undefined}
          d="flex"
          alignItems="center"
          py={3}
          pl={7}
          pr={10}
          w="100%"
          color={linkColor}
          _hover={{ color: hoverColor, bg: hoverBg, textDecor: 'none' }}
          _activeLink={{ color: hoverColor, bg: hoverBg, textDecor: 'none' }}
        >
          {Icon}
          <Text
            as="span"
            // letterSpacing="wide"
            fontSize="sm"
            ml={Icon ? 4 : 0}
            fontWeight={700}
          >
            {text}
          </Text>
        </Link>
      </NextLink>
    </Flex>
  )
}

function AccordionMenu({
  hoverColor,
  linkColor,
  hoverBg,
  text,
  Icon,
  submenu
}: ItemProps) {
  const { pathname } = useRouter()

  const newSubmenu: typeof submenu = submenu.map(m => ({
    ...m,
    isActive: pathname === m.href
  }))

  return (
    <AccordionItem as="li" border={0} color={linkColor}>
      {({ isExpanded }) => (
        <>
          <AccordionButton
            position="relative"
            py={3}
            pl={7}
            pr={10}
            color={isExpanded ? hoverColor : 'inherit'}
            _hover={{ color: hoverColor, bg: hoverBg, textDecor: 'none' }}
          >
            {Icon}
            <Flex
              flex="1"
              // letterSpacing="wide"
              fontSize="sm"
              ml={Icon ? 4 : 0}
              fontWeight={700}
            >
              {text}
            </Flex>
            <AccordionIcon position="absolute" right="1.25rem" />
          </AccordionButton>
          <AccordionPanel as="ul" p={0} py={2}>
            {newSubmenu.map(({ text, href, Icon, isActive }, i) => (
              <NextLink href={href ?? '#'} key={i} passHref>
                <Flex as="li" w="100%" py={2} pl={14} color={linkColor}>
                  <Link
                    aria-current={isActive ? 'page' : undefined}
                    w="100%"
                    _hover={{
                      color: hoverColor,
                      bg: hoverBg,
                      textDecor: 'none'
                    }}
                    _activeLink={{
                      color: hoverColor,
                      bg: hoverBg,
                      textDecor: 'none'
                    }}
                  >
                    {Icon}
                    <Text
                      as="span"
                      // letterSpacing="wide"
                      fontSize="sm"
                      ml={Icon ? 4 : 0}
                    >
                      {text}
                    </Text>
                  </Link>
                </Flex>
              </NextLink>
            ))}
          </AccordionPanel>
        </>
      )}
    </AccordionItem>
  )
}

function MenuItem(props: MenuItemProps) {
  const { sidebar } = useValhalla()

  const linkColor = useColorModeValue('gray.500', 'whiteAlpha.700')
  const hoverColor = useColorModeValue(
    `${sidebar.colorScheme}.500`,
    `${sidebar.colorScheme}.400`
  )

  if (props.submenu) {
    return (
      <AccordionMenu
        {...props}
        linkColor={linkColor}
        hoverColor={hoverColor}
        // hoverBg={hoverBg}
      />
    )
  }

  return (
    <ItemMenu
      {...props}
      linkColor={linkColor}
      hoverColor={hoverColor}
      // hoverBg={hoverBg}
    />
  )
}

export default memo(MenuItem)
