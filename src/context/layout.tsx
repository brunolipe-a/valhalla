import { createContext, useContext, useMemo } from 'react'

import { useBreakpointValue } from '@chakra-ui/react'

type LayoutContextValue = {
  sideBarMargin: number
  isLessThanLG: boolean
}

const LayoutContext = createContext<LayoutContextValue>(
  {} as LayoutContextValue
)

function LayoutProvider({ children }: WithChildren) {
  const isLessThanLG = useBreakpointValue({ base: true, lg: false })

  const sideBarMargin = useMemo(() => (isLessThanLG ? 0 : 320), [isLessThanLG])

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
