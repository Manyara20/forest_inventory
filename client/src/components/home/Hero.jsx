import { Box, Container } from '@mui/material'
import { Carousel } from 'react-responsive-carousel';
import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import image1 from '../../../src/assets/images/forest.jpg';
import image2 from '../../../src/assets/images/homePhoto.jpg';
import image3 from '../../../src/assets/images/mtKenya.jpg';

const Hero = () => {

  return (
   <Box sx={{
    paddingX: 0.5,
   }}>
      <Box>
        <Carousel
        infiniteLoop
        showStatus={false}
        showIndicators
        showArrows
        autoFocus
        showThumbs={false}
        useKeyboardArrows
        autoPlay>
       <Box
        component="img"
        sx={{
          height: {xs: 300, md: 500},
          maxHeight: {xs: 300, md: 500 },
          paddingY: 1
        }}
          alt="The house from the offer."
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
        />
        <Box
        component="img"
        sx={{
          height: {xs: 300, md: 500},
          maxHeight: { xs: 300, md: 500 },
          paddingY: 0.5,
        }}
          alt="The house from the offer."
          src={image2}
        />

        </Carousel>
      </Box>
   </Box>
  )
}

export default Hero