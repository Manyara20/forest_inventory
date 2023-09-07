import { Box, Card, Container, Paper, Typography } from '@mui/material'
import { green, red } from '@mui/material/colors'
import { useForm } from 'react-hook-form';
import React from 'react'

// function subcompartment() {
const SubCompartment=()=>{
    const { register, handleSubmit, watch, formState: { errors } } = useForm({mode: 'onChange'});

    return (
        <Container sx={{width:'2000px', bgcolor: 'red'}}>
            <paper elevation={1}> 
            <Box sx={{bgcolor: 'green'}}>   </Box>
            </paper>
       <Typography sx={{color:'white'}}>  subcompartment Restration</Typography>
       <Box>
            <Card sx={{ 
                display: 'flex',
                flexDirection: {xs: 'column', sm: 'row'},
                paddingBottom: '20px',
                border: 'none',
                boxShadow: 'none',
                color: 'red',
                bgcolor: 'orange'}}>
            <form onSubmit={handleSubmit}>
            <div className='inputForm'>
            <label>Full Name</label>
            <input type="text" placeholder='Full Name as it appears on you ID' 
                {...register("fullname", { 
                    required: {value: true, message: "Name is Required"},
                    maxLength: {value: 100, message: "Cannot be Longer than 100 characters"}, 
                    pattern: {value: /^[A-Za-z]+$/, message: "Cam Only Contain Letters"} })} />
            
</div>
</form>
                </Card>
                </Box>
        </Container>
      )
}
 
// }

export default SubCompartment