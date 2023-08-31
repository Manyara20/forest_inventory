import React from 'react'
import ReactDOM from 'react-dom/client'
import { theme } from '../src/theme.js'
import App from './App.jsx'
import { ThemeProvider } from '@mui/material'
import { AppContextProvider } from './context/ApplicationContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
