import {
  MoonIcon,
  BellIcon,
  PhoneIcon,
  WarningIcon,
  SearchIcon,
  ChatIcon
} from '@chakra-ui/icons'

export type MenuItem = {
  text: string
  isHeader?: boolean
  url?: string
  Icon?: React.ReactElement
  href?: string
  submenu?: MenuItem[]
  isActive?: boolean
}
export type ValhallaConfig = {
  sidebar: {
    width: number
    colorScheme: string
  }
  menu: MenuItem[]
}

const defaultConfig: ValhallaConfig = {
  sidebar: {
    width: 290,
    colorScheme: 'teal'
  },
  menu: [
    {
      text: 'Default Dashboard',
      Icon: <MoonIcon />,
      href: '/'
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
          text: 'Project Card'
        },
        {
          text: 'Project List'
        }
      ]
    },
    {
      text: 'User Manager',
      Icon: <SearchIcon />,
      submenu: [
        {
          text: 'User List - Regular',
          href: '/teste'
        },
        {
          text: 'User List - Compact'
        }
      ]
    }
  ]
}

export default defaultConfig
