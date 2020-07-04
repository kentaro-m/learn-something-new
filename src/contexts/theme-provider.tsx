import React from 'react'
import ThemeContext from './theme-context'
import useDarkMode from 'use-dark-mode'
import { ThemeProvider as EmotionProvider } from 'emotion-theming'
import { getTheme, Theme } from '../styles/theme'

export const ThemeProvider: React.FC = ({ children }) => {
  const toggleDarkMode = useDarkMode()
  
  return (
    <EmotionProvider theme={getTheme(toggleDarkMode.value ? Theme.Dark : Theme.Light)}>
      <ThemeContext.Provider value={{
        darkMode: toggleDarkMode.value,
        toggleDarkMode: toggleDarkMode.toggle
      }}>
        {children}
      </ThemeContext.Provider>
    </EmotionProvider>
  )
}