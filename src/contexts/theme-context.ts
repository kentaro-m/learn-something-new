import { createContext } from 'react'

const defaultContext = {
  darkMode: false,
  toggleDarkMode: () => {},
}

const ThemeContext = createContext(defaultContext)

export default ThemeContext