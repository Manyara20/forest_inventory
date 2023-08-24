import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette:{
    mode: 'light',

    primary:{
      main: "#346a30",
      alt: "#A4918D",
    },
    secondary:{
      main: '#6a961f',
    },
    otherColor:{
      main:"#999"
    }
  },

  typography: {
    fontFamily:[
        'CerebriSans SemiBold',
      'Noto Sans JP',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      "Helvetica Neue",
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      "Segoe UI Emoji",
      "Segoe UI Symbol",
    ]
  },

});