import { createContext, useContext } from 'react'

import defaultConfig, { ValhallaConfig } from '~/config/valhalla'

import { LayoutProvider } from './layout'

type ValhallaContextValue = ValhallaConfig

const ValhallaContext = createContext<ValhallaContextValue>(
  {} as ValhallaContextValue
)

interface ValhallaProviderProps extends WithChildren {
  config?: ValhallaConfig
}

function ValhallaProvider({
  children,
  config = defaultConfig
}: ValhallaProviderProps) {
  return (
    <ValhallaContext.Provider
      value={{
        ...config
      }}
    >
      <LayoutProvider>{children}</LayoutProvider>
    </ValhallaContext.Provider>
  )
}

function useValhalla(): ValhallaContextValue {
  return useContext(ValhallaContext)
}

export { ValhallaProvider, useValhalla }
