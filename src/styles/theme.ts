const darkTheme = {
  colors: {
    background: '#091519',
    text: '#cccccc',
    primary: '#57c4e1'
  }
}

const lightTheme = {
  colors: {
    background: '#ffffff',
    text: '#2d2d2d',
    primary: '#1a85dc'
  }
}

export const getTheme = (darkMode: boolean) => {
  return darkMode ? darkTheme : lightTheme
}