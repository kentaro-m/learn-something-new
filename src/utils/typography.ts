import Typography from 'typography'
import githubTheme from 'typography-theme-github'

githubTheme.overrideThemeStyles = () => ({
  h2: {
    margin: '1.5rem 0',
    lineHeight: 1.25,
    paddingBottom: '0.5rem'
  },
  h3: {
    margin: '1.5rem 0',
    lineHeight: 1.25,
  },
  p: {
    marginBottom: '2.0rem'
  },
  li: {
    marginBottom: '0'
  },
  ul: {
    marginBottom: '2.0rem'
  }
})

const typography = new Typography(githubTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
