import React, { useState } from 'react'
import { Box, Button, ButtonGroup, IconButton, Menu, MenuItem, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
      };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    
  return (
    <Box
    sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingY: '10px',
        alignItems: 'center',
        bgcolor: '#346a30',
        height: {xs: '50px', sm: '60px'}
    }}>
        <Box sx={{
            display: 'block',
            paddingX: '7px',
        }}><Typography variant='body' sx={{
            fontSize: '1.25rem',
            fontFamily: 'CerebriSans SemiBold',
            color: 'white',
            fontWeight: 600,
            whiteSpace: 'nowrap',
        }}>Plantation Management System</Typography></Box>
        <Box sx={{
            display: {xs: 'block', sm: 'none'},
        }}>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleOpenNavMenu}
                sx={{ mr: 2 }}
            >
            <MenuIcon />
            </IconButton>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorElNav}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
                }}
                transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
                }}> 
                <MenuItem ><Link style={{
                     textDecoration: 'none',
                     fontWeight: '500',
                     color: 'black'
                }}>Login</Link></MenuItem>
                <MenuItem ><Link style={{
                    textDecoration: 'none',
                    fontWeight: '500',
                    color: 'black'
                }}>Logout</Link></MenuItem>
            </Menu>
        </Box>
        <Box sx={{
            display: {xs: 'none', sm: 'flex'},
            flexDirection: 'row',
            alignItems: 'center',
            gap: '20px',
            justifyContent: 'space-between',
            paddingX: '12px'
        }}>
            <Box><ButtonGroup variant="contained" aria-label="outlined primary button group">
                <Button>Login</Button>
                <Button>Logout</Button>
                </ButtonGroup>
            </Box>
            </Box>
    </Box>
  )
}

export default Navbar