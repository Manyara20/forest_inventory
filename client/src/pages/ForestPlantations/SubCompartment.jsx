import { Box, Card, Container, Paper, Typography } from '@mui/material'
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
       <Box>
            <Card sx={{ 
                display: 'flex',
                flexDirection: {xs: 'column', sm: 'row'},
                paddingBottom: '20px',
                border: 'none',
                boxShadow: 'none',
                color: 'red',
                bgcolor: 'orange'}}>
                    </Card>
                    </Box>
        </Container>
      )
}
 
// }

export default SubCompartment