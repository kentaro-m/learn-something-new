import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: true,
  },
  styles: {
    global: {
      body: {
        bg: 'gray.800',
        color: 'white',
      },
    }
  },
  components: {
    Link: {
      baseStyle: {
        color: 'cyan.400',
      },
    }
  }
})