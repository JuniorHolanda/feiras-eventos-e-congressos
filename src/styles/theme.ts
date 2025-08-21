export const theme = {
  colors: {
    primary: '#275af2',
    primaryLight: '#8daef2',

    accent: '#f29422',
    accentLight: '#f2ae2e',

    backgroundDark: '#0b0a14',
    backgroundSpecial: '#0d0630',
    backgroundNeutral: '#2d2c3f',

    textLight: '#ffffff',
    textDark: '#161616',

    gray100: '#ffffffff',
    gray200: '#e0e3e4',
    gray300: '#d4d4d4ff',
  },
  spacing: {
    xs: '5px',
    sm: '10px',
    md: '30px',
    lg: '50px',
    xl: '150px',
  },
  fontSizes: {
    titleSmall: "clamp(12px, 2vw, 2em)",
    titleMedium: "clamp(16px, 2.5vw, 3em)",
    titleLarge: "clamp(25px, 4vw, 5em)",

    text: "clamp(8px, 1vw, 2em)",
    textMedium: "clamp(10px, 1.5vw, 2.5em)",
    textBig: "clamp(16px, 3vw, 4em)",
  },
   breakpoints: {
    mobile: "480px",
    tablet: "768px",
    desktop: "1024px",
    tv: "1500px"
  }
};