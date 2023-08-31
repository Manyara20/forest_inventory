/* eslint-disable react/prop-types */
import { useState, createContext } from 'react';

export const AppContext = createContext();

export const AppContextProvider = ({children}) => {

const [openSnackbar, setOpenSnackbar] = useState(false)
const [snackProps, setSnackProps] = useState({duration: 2400, severity: 'success', message: "success"})

  return (
    <AppContext.Provider value={{  
      openSnackbar,
      setOpenSnackbar,
      snackProps,
      setSnackProps, 
       }}>
        {children}
    </AppContext.Provider>
  )
}