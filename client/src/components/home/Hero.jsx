import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, List, ListItem, ListItemText, Typography } from '@mui/material'
import { Carousel } from 'react-responsive-carousel';
import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import image1 from '../../../src/assets/images/forest.jpg';
import image2 from '../../../src/assets/images/homePhoto.jpg';


const textItems =[
'Establish a comprehensive and credible database for all Institutional and Private Tree Nurseries: The invaluable role of the Institutional and Private Tree Nurseries in promoting national tree planting, as well as creation of jobs for youth, men and women across the country cannot be overemphasized. However, lack of coherent and reliable data on; the number of these tree nurseries, location, distribution, quantity and quality of seedlings produced, species diversity, infrastructure and technical capacity gaps, has continuously excluded a large segment of these nurseries from the government’s planning process and provision of services',
'Support the attainment of the Presidential Directive on 10% national tree cover by 2022: The Ministry of Environment and Forestry and KFS continue to lead and sustain spirited efforts to mobilize all Government Ministries, Departments and Agencies, the Private Sector and the public, for the national tree planting campaigns. The Institutional and Private Tree Nurseries are expected to provide the bulk of the seedlings for attaining the 10% national tree cover goal',
]

const textItems2 = [
  'Mapping of the tree nurseries. The voluntary registration will enhance mapping of the Institutional and Private tree nurseries to determine their spread and distribution as well as the available seedlings to support the national tree planting campaigns',
'Enhance networking, ease of doing business and market linkages: The voluntary registration will provide opportunities, not only for networking amongst the registered tree nursery practitioners, but also for increased marketing of seedlings to the diverse customerss',
'Improve standards for production of tree seedlings and management of tree nurseries: The voluntary registration will provide a convenient platform for sharing of information on quality standards among the registered tree nursery practitioners and stakeholders. This will further provide a key foundation towards certification of tree nurseries',
]

const Hero = () => {

  return (
   <Box sx={{
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
          height: {xs: 200, md: 250},
          maxHeight: {xs: 200, md: 350 },
          paddingY: 1,
          objectFit: 'cover'
        }}
          alt="The house from the offer."
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
        />
        <Box
        component="img"
        sx={{
          height: {xs: 200, md: 250},
          maxHeight: { xs: 200, md: 350 },
          paddingY: 0.5,
          objectFit: 'cover'
        }}
          alt="The house from the offer."
          src={image2}
        />

        </Carousel>
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
              <List sx={{ listStyle: "decimal", pl: 4 }}>
                {textItems2.map((item, index) => (
                  <ListItem sx={{ display: "list-item" }} key={index}>
                    <ListItemText primary={item} />
                  </ListItem>
                ))}
              </List>
              </CardContent>
            </Card>
            <Card sx={{ display: 'flex',
                flexDirection: {xs: 'column-reverse', sm: 'row' },
                border: 'none',
                boxShadow: 'none',
                }}>
            <CardContent sx={{flex: 1}}>
              <List sx={{ listStyle: "decimal", pl: 4 }}>
                {textItems.map((item, index) => (
                  <ListItem sx={{ display: "list-item" }} key={index}>
                    <ListItemText primary={item} />
                  </ListItem>
                ))}
              </List>
              </CardContent>
              <CardMedia sx={{flex: 1,
                  paddingY: '25px',
                  width: {xs: '100%', sm: '50%'},
                  maxHeight: {xs: '200', sm: '400'},
                  height: {xs: '200', sm: '400'}}}
                component="img"
                alt="green iguana"
                height={500}
                image={image1}
              />
            </Card>
      </Box>
   </Box>
  )
}

<li>
  <ol></ol>
  <ol></ol>
</li>
export default Hero