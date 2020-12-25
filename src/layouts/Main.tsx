import { DarkMode, Flex } from '@chakra-ui/react'

import Head from 'next/head'

import MainContent from '~/components/MainContent'
import SideBar from '~/components/SideBar'

type MainProps = WithChildren & {
  title: string
}

const Main = ({ children, title }: MainProps) => {
  return (
    <Flex position="relative">
      <Head>
        <title>{title}</title>
      </Head>
      <DarkMode>
        <SideBar />
      </DarkMode>
      <MainContent>{children}</MainContent>
    </Flex>
  )
}

export default Main
