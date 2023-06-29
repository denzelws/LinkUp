export default {
  grid: {
    container: '50rem'
  },
  font: {
    family:
      "Sora,  -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    normal: 400,
    bold: 600,
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.8rem',
      huge: '5.2rem'
    }
  },
  colors: {
    primary: '#F6F5FC',
    primaryMain: '#5961FC',
    blue: '#023E8A',
    white: '#FAFAFA',
    black: '#030517',
    lightGray: '#EAEAEA',
    gray: '#8F8F8F',
    gray100: '#E5E5E5',
    darkGray: '#2E2F42',
    red: '#d90429',
    danger: {
      light: '#F97171',
      main: '#FC5050',
      dark: '#F63131'
    },
    success: {
      main: '#51CA73'
    }
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  }
} as const
