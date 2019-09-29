import React from 'react'
import { Link } from 'gatsby'
import Toggle from 'react-toggle'
import useDarkMode from "use-dark-mode"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { rhythm, scale } from '../utils/typography'

library.add(faMoon, faSun)

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
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <h1
          style={{
            fontFamily: `Montserrat, sans-serif`,
            ...scale(1.0),
            marginBottom: rhythm(1.5),
            marginTop: 0,
            fontWeight: 800,
            borderBottom: 'none'
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
        </h1>
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
      </div>
    )
  } else {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
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
      </div>
    )
  }
}

export default Header