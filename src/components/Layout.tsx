import React, { useContext } from 'react'
import Header from './Header'
import styled from '@emotion/styled'
import { Global } from '@emotion/core'
import { rhythm } from '../utils/typography'
import { createGlobalStyles } from '../styles/global'
import { Theme } from '../styles/theme'
import ThemeContext from '../contexts/theme-context'

const LayoutWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(28)};
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
`

type LayoutProps = {
  location: Location
  title: string
  children: JSX.Element[]
}

const Layout: React.FC<LayoutProps> = ({ location, title, children }) => {
  const { darkMode } = useContext(ThemeContext)
  const globalStyles = createGlobalStyles(darkMode ? Theme.Dark : Theme.Light)

  return (
    <LayoutWrapper>
      <Global styles={[globalStyles]}/>
      <Header location={location} title={title} />
      {children}
    </LayoutWrapper>
  )
}

export default Layout
