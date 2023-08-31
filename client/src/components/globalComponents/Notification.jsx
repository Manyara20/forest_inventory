/* eslint-disable react/prop-types */
import { Alert, Snackbar } from '@mui/material'
import { useValue } from '../../context/ContextProvider.jsx'

const SnackBar = () => {

  const {state: {alert}, dispatch,}= useValue();

  const handleClose =()=>{
    dispatch({type: 'UPDATE_ALERT', payload: {...alert, open: false}})
  }

  return (
    <Snackbar open={alert.open} 
    autoHideDuration={6000}
    anchorOrigin={{vertical:'top', horizontal: 'right'}}
    sx={{width: '50%'}} 
    onClose={handleClose}>
        <Alert onClose={handleClose} severity={alert.severity} sx={{ width: '100%' }}>
            {alert.message}
        </Alert>
      </Snackbar>
  )
}

export default SnackBar