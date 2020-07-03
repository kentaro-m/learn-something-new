import React, { useContext } from 'react'
import { Link } from 'gatsby'
import DarkModeToggle from 'react-toggle'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { rhythm, scale } from '../utils/typography'
import { mq } from '../styles/media-queries'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import ThemeContext from '../contexts/theme-context'

library.add(faMoon, faSun)

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

const DarkModeWrapper = styled.div`
  display: flex;
  flex-flow: column;
  margin-top: -${rhythm(0.40)};
  ${mq[0]} {
    justify-content: space-between;
    flex-flow: row;
    margin-top: 13px;
  }
`

const DarkModeLabel = styled.label`
  font-size: ${scale(-0.2).fontSize};
  margin-bottom: ${rhythm(0.25)};
  ${mq[0]} {
    margin-bottom: 0;
    margin-right: 10px;
  }
`

const checkedIconStyle = css`
  font-size: 12px;
  color: #fff;
`

const uncheckedIconStyle = css`
  font-size: 12px;
  color: #fff;
`

type HeaderProps = {
  location: Location
  title: string
}

const Header: React.FC<HeaderProps> = ({ location, title }) => {
  // @ts-ignore
  const rootPath = `${__PATH_PREFIX__}/`

  const { darkMode, toggleDarkMode } = useContext(ThemeContext)
  
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
        <DarkModeWrapper>
          <DarkModeLabel htmlFor='dark-mode-toggle'>
            ダークモード
          </DarkModeLabel>
          <DarkModeToggle
            id='dark-mode-toggle'
            checked={darkMode}
            onChange={toggleDarkMode}
            icons={{
              checked: <FontAwesomeIcon icon={faMoon} css={checkedIconStyle} />,
              unchecked: <FontAwesomeIcon icon={faSun} css={uncheckedIconStyle} />
            }}
          />
        </DarkModeWrapper>
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
        <DarkModeWrapper>
          <DarkModeLabel htmlFor='dark-mode-toggle'>
            ダークモード
          </DarkModeLabel>
          <DarkModeToggle
            id='dark-mode-toggle'
            checked={darkMode}
            onChange={toggleDarkMode}
            icons={{
              checked: <FontAwesomeIcon icon={faMoon} css={checkedIconStyle} />,
              unchecked: <FontAwesomeIcon icon={faSun} css={uncheckedIconStyle} />
            }}
          />
        </DarkModeWrapper>
      </HeaderWrapper>
    )
  }
}

export default Header