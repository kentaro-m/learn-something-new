// custom typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'
import 'typeface-notosans-jp'
import '@fortawesome/fontawesome-svg-core/styles.css'
import React from 'react'
import { ThemeProvider } from './src/contexts/theme-provider'

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
)