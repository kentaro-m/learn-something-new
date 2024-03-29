import React from 'react'
import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import { MDXProvider } from '@mdx-js/react'
import { theme } from './src/theme/theme'
import { Tweet } from 'mdx-embed'
import Slide from './src/components/Slide'

const components = {
  Tweet,
  Slide,
}

export const wrapRootElement = ({ element }) => (
  <ChakraProvider theme={theme}>
    <CSSReset />
    <MDXProvider components={components}>
      {element}
    </MDXProvider>
  </ChakraProvider>
)