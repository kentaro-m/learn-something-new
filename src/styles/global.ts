import { css } from '@emotion/react'
import { getTheme, ThemeType, Theme } from './theme'

export const createGlobalStyles = (theme: ThemeType) => {
  const themeValues = getTheme(theme)
  
  return css`
    body {
      background: ${themeValues.colors.background};
      color: ${themeValues.colors.text};
    }

    a {
      color: ${themeValues.colors.primary};
    }
  `
}
