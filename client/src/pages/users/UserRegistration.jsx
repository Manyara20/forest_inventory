import { Box, Container, Card,Paper, CardContent, CardMedia,Typography, useTheme } from '@mui/material'
// import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, List, ListItem, ListItemText, Typography } from '@mui/material'

import React, { useState } from 'react'
import './UserRegistration.css'
import image1 from '../../../src/assets/images/forest.jpg';
// import Container from '@mui/material/Container';


const UserRegistration = () => {

  const {palette}=useTheme();
  const [firstName, setFirstName]= useState('');

 console.log("Rerendering")

  return (
    <Container sx={{
      width: '2000px',
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
        <Box>
            <Card sx={{ display: 'flex',
                flexDirection: {xs: 'column', sm: 'row'},
                paddingBottom: '20px',
                border: 'none',
                boxShadow: 'none' }}>
              <CardMedia sx={{flex: 1,
                   paddingY: '25px',
                  width: {xs: '100%', sm: '50%'},
                  height: {xs: '200', sm: '400'}
                  }}
                component="img"
                alt="green iguana"
                image={image1}
              />
              <CardContent sx={{flex: 1}}>
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
          
            <div className='certify'><label><input type="checkbox"  name="confirmTerms" value="true"></input>
          :The information you provide shall be solely used for this purpose and will not be disclosed to 
          any third party without your consent.
          </label></div>

          <div> <button>Submit</button></div>
          
          </div>
        </form>
              </CardContent>
            </Card>           
      </Box>

       
        </Paper>
    </Container>
  )
}

export default UserRegistration