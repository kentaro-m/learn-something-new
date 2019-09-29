import React from 'react'
import Header from './Header'

import { rhythm } from '../utils/typography'

type LayoutProps = {
  location: Location
  title: string
  children: JSX.Element[]
}

const Layout: React.FC<LayoutProps> = ({ location, title, children }) => {
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(28),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <Header location={location} title={title} />
      {children}
    </div>
  )
}

export default Layout
