// custom typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'
import 'typeface-notosans-jp'
import '@fortawesome/fontawesome-svg-core/styles.css'
import React from 'react'
import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import { theme } from './src/theme/theme'

export const wrapRootElement = ({ element }) => (
  <ChakraProvider theme={theme}>
    <CSSReset />
    {element}
  </ChakraProvider>
)