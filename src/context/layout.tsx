import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react'

import { useBreakpointValue } from '@chakra-ui/react'

type LayoutContextValue = {
  sideBarWidth: number
  sideBarMargin: number
  openSideBar: boolean
  overlay: boolean
  lgBreakingPoint: boolean
  toggleSideBar(): void
}

const LayoutContext = createContext<LayoutContextValue>(
  {} as LayoutContextValue
)

function LayoutProvider({ children }: WithChildren) {
  const [openSideBar, setOpenSideBar] = useState(true)
  const [overlay, setOverlay] = useState(false)

  const lgBreakingPoint = useBreakpointValue({ base: true, lg: false })

  const sideBarWidth = useMemo(() => (openSideBar ? 290 : 74), [openSideBar])
  const sideBarMargin = useMemo(() => (lgBreakingPoint ? 0 : sideBarWidth), [
    sideBarWidth,
    lgBreakingPoint
  ])

  useEffect(() => {
    setOpenSideBar(!lgBreakingPoint)
    setOverlay(false)
  }, [lgBreakingPoint])

  const toggleSideBar = useCallback(() => {
    if (lgBreakingPoint) {
      setOverlay(!openSideBar)
    }
    setOpenSideBar(!openSideBar)
  }, [lgBreakingPoint, openSideBar])

  return (
    <LayoutContext.Provider
      value={{
        sideBarMargin,
        openSideBar,
        overlay,
        sideBarWidth,
        toggleSideBar,
        lgBreakingPoint
      }}
    >
      {children}
    </LayoutContext.Provider>
  )
}

function useLayout(): LayoutContextValue {
  const context = useContext(LayoutContext)

  return context
}

export { LayoutProvider, useLayout }
