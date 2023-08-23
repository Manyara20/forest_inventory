import { Box } from '@mui/material'
import { Carousel } from 'react-responsive-carousel';
import React from 'react'
import image1 from '../../../src/assets/images/forest.jpg';
import image2 from '../../../src/assets/images/homePhoto.jpg';
import image3 from '../../../src/assets/images/mtKenya.jpg';

const Hero = () => {

  return (
   <Box>
      <Box sx={{
        height: '500',
        width: '500'
      }}>
        <Carousel
        infiniteLoop
        showStatus={false}
        showIndicators
        showArrows
        autoFocus
        showThumbs={false}
        useKeyboardArrows
        autoPlay>
        <div>
          <img src="https://images.unsplash.com/photo-1687360441027-27e70655b27e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=983&q=80" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
            <img src="https://images.unsplash.com/photo-1687360441027-27e70655b27e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=983&q=80" />
            <p className="legend">Legend 1</p>
        </div>
        </Carousel>
      </Box>
   </Box>
  )
}

export default Hero