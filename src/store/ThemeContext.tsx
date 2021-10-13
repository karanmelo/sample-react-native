import React, { createContext, useContext, useState, useCallback } from 'react'

import { ThemeProvider as SCThemeProvider } from 'styled-components'

import { useColorDeviceScheme } from '../hooks/'
import { lightTheme, darkTheme } from '../styles/themes'

interface ThemeContextData {
  toggleTheme(): void
  theme: Theme
}

interface Theme {
  name: string
  colors: {
    primary: string
    secundary: string
    border: string
    shadow: string
    text: string
  }
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData)

export const useTheme = () => useContext(ThemeContext)

export const ThemeProvider: React.FC = ({ children }) => {
  const localTheme = useColorDeviceScheme()

  const getTheme = (): Theme => {
    if (localTheme === 'light') {
      return lightTheme
    } else if (localTheme === 'dark') {
      return darkTheme
    }

    return lightTheme
  }

  const [theme, setTheme] = useState<Theme>(getTheme())

  const toggleTheme = useCallback(() => {
    if (theme.name === 'light') {
      setTheme(darkTheme)
    } else if (theme.name === 'dark') {
      setTheme(lightTheme)
    }
  }, [theme])

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      <SCThemeProvider theme={theme}>{children}</SCThemeProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
