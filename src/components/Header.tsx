import React from 'react'
import { Link } from 'gatsby'
import { rhythm, scale } from '../utils/typography'
import { mq } from '../styles/media-queries'
import styled from '@emotion/styled'
import DarkModeToggle from '../components/DarkModeToggle'

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const BlogTitle = styled.h1`
  font-family: Montserrat, sans-serif;
  font-size: ${scale(0.5).fontSize};
  line-height: ${scale(1.0).lineHeight};
  margin-bottom: ${rhythm(1.5)};
  margin-top: 0;
  font-weight: 800;
  border-bottom: none;
  ${mq[0]} {
    font-size: ${scale(1.0).fontSize};
  }
`

type HeaderProps = {
  location: Location
  title: string
}

const Header: React.FC<HeaderProps> = ({ location, title }) => {
  // @ts-ignore
  const rootPath = `${__PATH_PREFIX__}/`
  
  if (location.pathname === rootPath) {
    return (
      <HeaderWrapper>
        <BlogTitle>
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </BlogTitle>
        <DarkModeToggle/>
      </HeaderWrapper>
    )
  } else {
    return (
      <HeaderWrapper>
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            fontWeight: 800,
            marginTop: '10px',
            marginBottom: '0px',
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
        <DarkModeToggle/>
      </HeaderWrapper>
    )
  }
}

export default Header