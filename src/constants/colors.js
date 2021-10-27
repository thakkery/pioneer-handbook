import theme from './theme'

const colors = {
  grey100: '#ECECED',
  grey200: '#CFCFD1',
  grey300: '#B2B3B5',
  grey400: '#78797E',
  grey500: '#3E4047',
  grey600: '#383A40',
  grey700: '#25262B',
  grey800: '#1C1D20',
  grey900: '#131315',

  white: '#ffffff',
  yellow: '#ffdc4e',
  lightYellow: '#f9e892',
  blueGreyed: '#546c77',
  darkBlue: '#022a4b',
  beige: '#fff9d9',
  red: '#ff0000',
}

export const COLORS = {
  ...colors,
  text: {
    light: colors.grey500,
    dark: colors.white,
  },
  textSecondary: {
    light: colors.blueGreyed,
    dark: '#c6d8e0',
  },
  siteBackground: {
    light: '#f4f8fb',
    dark: colors.grey500,
  },
  wrapperBackground: {
    light: colors.white,
    dark: colors.grey500,
  },
  secondaryContentBackground: {
    light: '#f7f7f7',
    dark: '#3a3a3a',
  },
  wrapperShadow: {
    light: '#0000001a',
    dark: '#00000000',
  },
  primary: {
    light: '#008282',
    dark: '#008282',
  },
  primaryAlpha: {
    light: '#007272',
    dark: '#007272',
  },
  secondary: {
    light: colors.yellow,
    dark: colors.yellow,
  },
  h2: {
    light: colors.grey500,
    dark: colors.yellow,
  },
}

export const COLOR_MODE_KEY = 'color-mode'
export const INITIAL_COLOR_MODE_CSS_PROP = '--initial-color-mode'

export default { ...COLORS, ...(theme.colors || {}) }