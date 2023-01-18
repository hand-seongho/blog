const weight = {
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  extraBold: 800,
}

const size = {
  small: '0.875rem', // 14px
  default: '1rem', // 16px
  large: '8rem', // 128px
  h5: '1.125rem', // 18px
  h4: '1.375rem', // 22px
  h3: '1.625rem', // 26px
  h2: '1.875rem', // 30px
  h1: '2.625rem', // 46px
}

const color = {
  primary: '#316179',
  white: '#FFFFFF',
  black: '#000000',
  gray1: '#444444',
  gray2: '#888888',
  gray3: '#AAAAAA',
  gray4: '#D9D9D9',
  background1: '#F2F2F2',
  background2: '#141414',
}

const media = {
  desktop: '@media (min-width: 1080px)',
  mobile: '@media (max-width: 1079px)',
}

export const theme = {
  weight,
  size,
  color,
  media,
}

export type ThemeType = typeof theme
