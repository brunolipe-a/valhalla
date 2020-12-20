import { Flex } from '@chakra-ui/react'

import Head from 'next/head'

import MainContent from '~/components/MainContent'
import Overlay from '~/components/Ovelay'
import SideBar from '~/components/SideBar'
const Main = () => {
  return (
    <Flex position="relative">
      <Head>
        <title>Dashboard</title>
      </Head>
      <SideBar />
      <Overlay />
      <MainContent />
    </Flex>
  )
}

export default Main
