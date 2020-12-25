import { createContext, useContext, useMemo } from 'react'

import { useBreakpoint, useBreakpointValue } from '@chakra-ui/react'

import { useValhalla } from './valhalla'

type LayoutContextValue = {
  sideBarMargin: number
  isLessThanLG: boolean
}

const LayoutContext = createContext<LayoutContextValue>(
  {} as LayoutContextValue
)

function LayoutProvider({ children }: WithChildren) {
  const { sidebar } = useValhalla()

  const isLessThanLG = useBreakpointValue({ base: true, lg: false })

  const sideBarMargin = useMemo(() => (isLessThanLG ? 0 : sidebar.width), [
    isLessThanLG,
    sidebar.width
  ])

  return (
    <LayoutContext.Provider
      value={{
        sideBarMargin,
        isLessThanLG
      }}
    >
      {children}
    </LayoutContext.Provider>
  )
}

function useLayout(): LayoutContextValue {
  return useContext(LayoutContext)
}

export { LayoutProvider, useLayout }
