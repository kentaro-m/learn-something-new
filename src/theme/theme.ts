import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: true,
  },
  fonts: {
    heading: "'Noto Sans JP'",
    body: "'Noto Sans JP'"
  },
  styles: {
    global: {
      body: {
        bg: 'gray.800',
        color: 'gray.200',
        fontFeatureSettings: 'palt',
        letterSpacing: '.05em',
      },
    }
  },
  components: {
    Link: {
      baseStyle: {
        color: 'teal.300',
      },
    }
  }
})