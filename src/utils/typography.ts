import Typography from 'typography'
import githubTheme from 'typography-theme-github'

githubTheme.headerFontFamily = ['Noto Sans Japanese', 'sans-serif']
githubTheme.bodyFontFamily = ['Noto Sans Japanese', 'sans-serif']

githubTheme.overrideThemeStyles = ({ rhythm, scale }) => {
  return {
    h2: {
      margin: `${rhythm(1)} 0`,
      lineHeight: rhythm(1.2),
      paddingBottom: '0.5rem',
    },
    h3: {
      lineHeight: rhythm(1.2),
      paddingBottom: '1.0rem',
    },
    p: {
      marginBottom: rhythm(2),
      lineHeight: rhythm(1.2),
    },
    li: {
      marginBottom: '0'
    },
    ul: {
      marginBottom: rhythm(2),
    },
    ol: {
      marginBottom: rhythm(2),
    }
  }
}

const typography = new Typography(githubTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
