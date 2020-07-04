const darkTheme = {
  colors: {
    background: '#091519',
    text: '#cccccc',
    primary: '#57c4e1'
  }
}

export const lightTheme = {
  colors: {
    background: '#ffffff',
    text: '#2d2d2d',
    primary: '#1a85dc'
  }
}

export type ThemeValues = {
  colors: {
    background: string
    text: string
    primary: string
  }
}

export const Theme = {
  Dark: 'dark',
  Light: 'light'
} as const

export type ThemeType = typeof Theme[keyof typeof Theme]

export const getTheme = (theme: ThemeType) => {
  return Theme.Dark === theme ? darkTheme : lightTheme
}