import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: true,
  },
  fonts: {
    heading: "'M PLUS 2'",
    body: "'M PLUS 2'"
  },
  styles: {
    global: {
      body: {
        bg: 'gray.800',
        color: 'gray.200',
        letterSpacing: '.05em',
      },
    }
  },
  components: {
    Link: {
      baseStyle: {
        color: 'purple.200',
      },
    },
  }
})