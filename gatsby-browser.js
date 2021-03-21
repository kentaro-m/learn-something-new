import React from 'react'
import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import { theme } from './src/theme/theme'

export const wrapRootElement = ({ element }) => (
  <ChakraProvider theme={theme}>
    <CSSReset />
    {element}
  </ChakraProvider>
)