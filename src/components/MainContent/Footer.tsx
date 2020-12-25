import { Box, useColorModeValue } from '@chakra-ui/react'

function Footer() {
  return (
    <Box
      borderTop="1px solid"
      borderTopColor={useColorModeValue('gray.200', 'whiteAlpha.100')}
      h={65}
      shadow="base"
    />
  )
}

export default Footer
