import { Box, Container, Paper, Typography } from '@mui/material'
import { green, red } from '@mui/material/colors'
import React from 'react'

// function subcompartment() {
const SubCompartment=()=>{
    return (
        <Container sx={{width:'2000px', bgcolor: 'red'}}>
            <paper elevation={1}> 
            <Box sx={{bgcolor: 'green'}}>   </Box>
            </paper>
       <Typography sx={{color:'white'}}>  subcompartment Restration</Typography>
        </Container>
      )
}
 
// }

export default SubCompartment