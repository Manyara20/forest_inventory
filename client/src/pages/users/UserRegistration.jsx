import { Box, Container, Paper, Typography, useTheme } from '@mui/material'
import React, { useState } from 'react'
import './UserRegistration.css'

const UserRegistration = () => {

  const {palette}=useTheme();
  const [firstName, setFirstName]= useState('');

 console.log("Rerendering")

  return (
    <Container sx={{
      width: '500px',
    }}>
      <Paper elevation={1}>
        <Box border='5px solid white'  sx={{
          alignItems: 'center',
          justifyContent:'center',
          display: 'flex',
          paddingY: '10px',
          width: '100%',
          bgcolor: palette.secondary.main,
        }}>
        <Typography sx={{
          color: 'white',
          fontWeight: 600,
        }} variant='h5'> Register Now</Typography>
        </Box> 
        <form>
          <div className='inputForm'>
          <label>Full Name</label>
          <input type="text" placeholder='Full Name' />
          <label>KFS No</label>
          <input type="text" placeholder='KFS No.' />
          <label>KFS Email Adress</label>
          <input type="text" placeholder='KFS Email Adress' />
          <label>Confirm Email</label>
          <input type="text" placeholder='Confirm Email' />
          <label>Mobile No.</label>
          <input type="text" placeholder='Mobile No.' />
          <label>Password</label>
          <input type="password" placeholder='Password' />
          <label>Confirm Password</label>
          <input type="password" placeholder='Confirm Password' />
          <input type="checkbox"  name="confirmTerms" value="true"></input>
          </div>
        </form>
        </Paper>
    </Container>
  )
}

export default UserRegistration