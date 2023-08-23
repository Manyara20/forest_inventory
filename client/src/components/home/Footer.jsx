import { useTheme } from '@emotion/react';
import { Box, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
const {pallete}= useTheme();

const currentDate = new Date();

const day = currentDate.getDate();
const month = currentDate.getMonth() + 1; // Months are zero-based, so add 1
const year = currentDate.getFullYear();

// Pad the day and month with leading zeros if needed
const formattedDay = day < 10 ? `0${day}` : day;
const formattedMonth = month < 10 ? `0${month}` : month;

const formattedDate = `${formattedDay}-${formattedMonth}-${year}`;

  return (
    <Box bgcolor='primary.alt' sx={{
      display: 'flex',
      flexDirection: 'column',
      padding: '20px',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Typography>{`Copyright @ ${formattedDate} All Rights Reserved BY | Kenya Forest Service`}</Typography>
    </Box>
  )
}

export default Footer