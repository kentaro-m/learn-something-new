import React from 'react'
import ThemeContext from './theme-context'
import useDarkMode from 'use-dark-mode'
import { ThemeProvider as EmotionProvider } from 'emotion-theming'
import { getTheme } from '../styles/theme'

export const ThemeProvider: React.FC = ({ children }) => {
  const toggleDarkMode = useDarkMode(false)
  
  return (
    <EmotionProvider theme={getTheme(toggleDarkMode.value)}>
      <ThemeContext.Provider value={{
        darkMode: toggleDarkMode.value,
        toggleDarkMode: toggleDarkMode.toggle
      }}>
        {children}
      </ThemeContext.Provider>
    </EmotionProvider>
  )
}