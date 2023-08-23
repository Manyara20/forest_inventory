import React, { useState } from 'react'
import { Box, IconButton, Menu, MenuItem, Typography } from '@mui/material'
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
        height: {xs: '30px', sm: '40px'}
    }}>
        <Box sx={{
            display: 'block',
            paddingX: '7px',
        }}><Typography variant='body' sx={{
            fontSize: '1.25rem',
            fontFamily: 'roboto',
            color: 'white',
            fontWeight: 600

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
            <Link style={{
                textDecoration: 'none',
                fontWeight: '600',
                color: 'white'
            }}>Login</Link>
            <Link style={{
                textDecoration: 'none',
                fontWeight: '600',
                color: 'white'
            }}>Logout</Link>
        </Box>
    </Box>
  )
}

export default Navbar