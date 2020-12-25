import {
  MoonIcon,
  BellIcon,
  PhoneIcon,
  WarningIcon,
  SearchIcon,
  ChatIcon
} from '@chakra-ui/icons'

import { m } from 'framer-motion'

export type MenuItem = {
  text: string
  isHeader?: boolean
  url?: string
  Icon?: React.ReactElement
  route?: string
  submenu?: MenuItem[]
}
export type ValhallaConfig = {
  sidebar: {
    width: number
  }
  menu: MenuItem[]
}

const defaultConfig: ValhallaConfig = {
  sidebar: {
    width: 290
  },
  menu: [
    {
      text: 'Default Dashboard',
      Icon: <MoonIcon />
    },
    {
      text: 'Cript Dashboard',
      Icon: <BellIcon />
    },
    {
      text: 'Analytics Dashboard',
      Icon: <PhoneIcon />
    },
    {
      text: 'Invest Dashboard',
      Icon: <WarningIcon />
    },
    {
      text: 'PRE-BUILT PAGES',
      isHeader: true
    },
    {
      text: 'Projects',
      Icon: <ChatIcon />,
      submenu: [
        {
          text: 'opa'
        }
      ]
    },
    {
      text: 'User Manager',
      Icon: <SearchIcon />
      // submenu: [
      //   {
      //     text: 'opa'
      //   }
      // ]
    }
  ]
}

export default defaultConfig
