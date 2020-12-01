import { Box, useColorModeValue } from '@chakra-ui/react'

function Footer() {
  return (
    <Box
      h={65}
      shadow="base"
      borderTop="1px solid"
      borderTopColor={useColorModeValue('gray.200', 'whiteAlpha.100')}
    />
  )
}

export default Footer
