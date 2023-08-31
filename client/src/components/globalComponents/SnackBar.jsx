/* eslint-disable react/prop-types */
import { Alert, Snackbar } from '@mui/material'
import React, { useContext } from 'react'
import { AppContext } from '../../context/ApplicationContext.jsx'

const SnackBar = () => {

  const {openSnackbar, snackProps, setOpenSnackbar} = useContext(AppContext)

  return (
    <Snackbar open={openSnackbar} 
    autoHideDuration={snackProps.duration}
    anchorOrigin={{vertical:'top', horizontal: 'right'}}
    sx={{width: '50%'}} 
    onClose={setOpenSnackbar}>
        <Alert onClose={setOpenSnackbar} severity={snackProps.severity} sx={{ width: '100%' }}>
            {snackProps.message}
        </Alert>
      </Snackbar>
  )
}

export default SnackBar