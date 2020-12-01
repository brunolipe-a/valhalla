import { Box } from '@chakra-ui/react'

import { AnimatePresence, motion } from 'framer-motion'

import { useLayout } from '~/context/layout'

const MotionBox = motion.custom(Box)

function Overlay() {
  const { overlay, toggleSideBar } = useLayout()

  return (
    <AnimatePresence>
      {overlay && (
        <MotionBox
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          display={{ base: 'block', lg: 'none' }}
          position="fixed"
          top={0}
          right={0}
          bottom={0}
          left={0}
          zIndex={900}
          bg="blackAlpha.300"
          onClick={toggleSideBar}
        />
      )}
    </AnimatePresence>
  )
}

export default Overlay
