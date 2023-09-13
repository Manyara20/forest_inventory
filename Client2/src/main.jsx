import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ContextProvider from './context/ContextProvider.jsx'
import { queryClient } from './utils/reactQueryClient.js'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import {  QueryClientProvider } from '@tanstack/react-query';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <QueryClientProvider client={queryClient}>
      <ContextProvider>
        <App />
      </ContextProvider>
      <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
  </React.StrictMode>,
)
