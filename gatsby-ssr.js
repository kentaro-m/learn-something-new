import React from 'react'
import { ThemeProvider } from './src/contexts/theme-provider'

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
)