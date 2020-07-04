import { createContext } from 'react'
import { lightTheme } from '../styles/theme'

const defaultContext = {
  darkMode: false,
  toggleDarkMode: () => {},
  theme: lightTheme
}

const ThemeContext = createContext(defaultContext)

export default ThemeContext