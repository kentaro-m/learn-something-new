import { css } from '@emotion/core'
import { getTheme } from './theme'

export const createGlobalStyles = (darkMode: boolean) => {
  const theme = getTheme(darkMode)
  
  return css`
    body {
      background: ${theme.colors.background};
      color: ${theme.colors.text};
    }

    a {
      color: ${theme.colors.primary};
    }
  `
}
