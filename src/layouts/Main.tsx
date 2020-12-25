import { DarkMode, Flex } from '@chakra-ui/react'

import Head from 'next/head'

import MainContent from '~/components/MainContent'
import SideBar from '~/components/SideBar'

const Main = ({ children }: WithChildren) => {
  return (
    <Flex position="relative">
      <Head>
        <title>Dashboard</title>
      </Head>
      <DarkMode>
        <SideBar />
      </DarkMode>
      <MainContent>{children}</MainContent>
    </Flex>
  )
}

export default Main
