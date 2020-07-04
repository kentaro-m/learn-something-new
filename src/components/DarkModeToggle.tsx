import React, { useContext } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { rhythm, scale } from '../utils/typography'
import { mq } from '../styles/media-queries'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import styled from '../components/styled'
import { css } from '@emotion/core'
import ThemeContext from '../contexts/theme-context'

library.add(faMoon, faSun)

const DarkModeWrapper = styled.div`
  display: flex;
  flex-flow: column;
  margin-top: -${rhythm(0.40)};
  ${mq[0]} {
    justify-content: space-between;
    flex-flow: row;
    margin-top: 13px;
    align-items: flex-start;
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

const DarkModeToggle = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  appearance: none;
  color: ${props => props.theme.colors.text};
`

const moonIconStyle = css`
  font-size: 20px;
  vertical-align: baseline;
`

const sunIconStyle = css`
  font-size: 24px;
  vertical-align: baseline;
`

const Toggle: React.FC = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext)

  return (
    <DarkModeWrapper>
      <DarkModeLabel htmlFor='dark-mode-toggle'>
        ダークモード
      </DarkModeLabel>
      <DarkModeToggle id='dark-mode-toggle' onClick={toggleDarkMode} >
        {darkMode ? <FontAwesomeIcon icon={faMoon} css={moonIconStyle} /> :<FontAwesomeIcon icon={faSun} css={sunIconStyle} />}
      </DarkModeToggle>
    </DarkModeWrapper>
  )
}

export default Toggle