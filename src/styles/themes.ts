import { sg } from './styleGuide'

export const lightTheme = {
  name: 'light',
  colors: {
    primary: sg.colors.white,
    secundary: sg.colors.gray,
    border: sg.colors.blue,
    shadow: sg.colors.lightGray,
    text: sg.colors.dark,
    button: sg.colors.blue,
  },
}

export const darkTheme = {
  name: 'dark',
  colors: {
    primary: sg.colors.dark,
    secundary: sg.colors.purple,
    border: sg.colors.purple,
    shadow: sg.colors.lightPurple,
    text: sg.colors.white,
    button: sg.colors.purple,
  },
}
