import React from 'react'
import ReactDOM from 'react-dom/client'
import { theme } from '../src/theme.js'
import App from './App.jsx'
import { ThemeProvider } from '@mui/material'
import ContextProvider from './context/ContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ContextProvider>
        <App />
      </ContextProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
