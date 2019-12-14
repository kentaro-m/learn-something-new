import React from 'react'
import { Link } from 'gatsby'
import Toggle from 'react-toggle'
import useDarkMode from "use-dark-mode"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { rhythm, scale } from '../utils/typography'
import styled from '@emotion/styled'

library.add(faMoon, faSun)

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const BlogTitle = styled.h1`
  font-family: Montserrat, sans-serif;
  font-size: ${scale(1.0).fontSize};
  line-height: ${scale(1.0).lineHeight};
  margin-bottom: ${rhythm(1.5)};
  margin-top: 0;
  font-weight: 800;
  border-bottom: none;
`

type HeaderProps = {
  location: Location
  title: string
}

const Header: React.FC<HeaderProps> = ({ location, title }) => {
  // @ts-ignore
  const rootPath = `${__PATH_PREFIX__}/`

  const darkMode = useDarkMode(false, {
    classNameDark: 'dark-theme',
    classNameLight: 'light-theme'
  })

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
        <label
          style={{
            marginTop: '10px'
          }}
        >
          <Toggle
            className='dark-mode-toggle'
            checked={darkMode.value}
            onChange={darkMode.toggle}
            icons={{
              checked: <FontAwesomeIcon icon={faMoon} style={{ fontSize: '12px', color: '#fff' }} />,
              unchecked: <FontAwesomeIcon icon={faSun} style={{ fontSize: '12px', color: '#fff' }} />
            }}
          />
        </label>
      </HeaderWrapper>
    )
  } else {
    return (
      <HeaderWrapper>
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
            fontWeight: 800
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
        <label
          style={{
            marginTop: '3px'
          }}
        >
          <Toggle
            className='dark-mode-toggle'
            checked={darkMode.value}
            onChange={darkMode.toggle}
            icons={{
              checked: <FontAwesomeIcon icon={faMoon} style={{ fontSize: '12px', color: '#fff' }} />,
              unchecked: <FontAwesomeIcon icon={faSun} style={{ fontSize: '12px', color: '#fff' }} />
            }}
          />
        </label>
      </HeaderWrapper>
    )
  }
}

export default Header