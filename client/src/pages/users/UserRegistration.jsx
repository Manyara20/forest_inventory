import { Box, Container, Card,Paper, CardContent, CardMedia,Typography, useTheme } from '@mui/material'
// import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, List, ListItem, ListItemText, Typography } from '@mui/material'

import React, { useState } from 'react'
import './UserRegistration.css'
import image1 from '../../../src/assets/images/forest.jpg';
import { useForm } from 'react-hook-form';
// import Container from '@mui/material/Container';


const UserRegistration = () => {

  const {palette}=useTheme();
 
  const { register, handleSubmit, watch, formState: { errors } } = useForm({mode: 'onChange'});

  const watchPassword = watch("password")
  const watchEmail = watch("email")


  const submit = async (data) =>{
    console.log(data)
  }

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
              <form onSubmit={handleSubmit(submit)}>
                  <div className='inputForm'>
                  <label>Full Name</label>
                  <input type="text" placeholder='Full Name' 
                      {...register("fullname", { required: {value: true, message: "Name is Required"},
                       maxLength: {value: 100, message: "Cannot be Longer than 100 characters"}, 
                       pattern: {value: /^[A-Za-z]+$/, message: "Cam Only Contain Letters"} })} />
                       {errors.fullname && <span>{errors.fullname.message}</span>}
                  <label>KFS No</label>
                  <input type="text" placeholder='KFS No.' 
                    {...register("kfs_no", { required: {value: true, message: "KFS NO is Required"},
                    maxLength: {value: 10, message: "Cannot be Longer than 10 Characters"}, 
                    pattern: {value: /^[0-9]+$/, message: "Can Only Contain Numbers"} })}/>
                    {errors.kfs_no && <span>{errors.kfs_no.message}</span>}
                  <label>KFS Email Adress</label>
                  <input type="text" placeholder='KFS Email Adress' 
                      {...register("email", { required: {value: true, message: "Email is Required"},
                      maxLength: {value: 50, message: "Cannot be Longer than 50 Characters"}, 
                      pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: "Enter a Valid Email"} })}/>
                      {errors.email && <span>{errors.email.message}</span>}
                  <label>Confirm Email</label>
                  <input type="text" placeholder='Confirm Email' 
                    {...register("confirm_email", { required: {value: true, message: "Confirm Email is Required"},
                    maxLength: {value: 50, message: "Cannot be Longer than 50 Characters"}, 
                    pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: "Enter a Valid Email"},
                    validate: (value) => value === watchEmail || "The Emails do not match" })}/>
                    {errors.confirm_email && <span>{errors.confirm_email.message}</span>}
                  <label>Mobile No.</label>
                  <input type="text" placeholder='Mobile No.' 
                    {...register("phone", { required: {value: true, message: "Mobile Number is Required"},
                    maxLength: {value: 10, message: "Cannot be Longer than 10 Characters"}, 
                    pattern: {value: /^0\d{9}$/, message: "Enter a Valid Number, Start With 0"},
                     })}/>
                     {errors.phone && <span>{errors.phone.message}</span>}
                  <label>Password</label>
                  <input type="password" placeholder='Password' 
                    {...register("password", { required: {value: true, message: "Password is Required"},
                    minLength: {value: 7, message: "Enter at Least 7 Caharcter"}, 
                    })}/>
                    {errors.password && <span>{errors.password.message}</span>}
                  <label>Confirm Password</label>
                  <input type="password" placeholder='Confirm Password' 
                     {...register("confirm_password", { required: {value: true, message: "Confirm Password is Required"},
                     minLength: {value: 7, message: "Must be at Least 7 Character"}, 
                     validate: (value) => value === watchPassword || "The passwords do not match" })}/>
                     {errors.confirm_password && <span>{errors.confirm_password.message}</span>}
                  </div>
                  <div>
                      <div className='certify'>
                        <span><input type="checkbox"
                        {...register("confirm_terms", { required: {value: "true", message: "Please Confirm Terms"}})} /></span>
                        <span>
                        <label>
                          The information you provide shall be solely used for this purpose and will not be disclosed to 
                          any third party without your consent.
                      </label>
                      </span>
                      </div>
                      {errors.confirm_terms && <span>{errors.confirm_terms.message}</span>}
                  </div>
                  <div> <button> Register </button></div>
        </form>
              </CardContent>
            </Card>           
      </Box>

       
        </Paper>
    </Container>
  )
}

export default UserRegistration