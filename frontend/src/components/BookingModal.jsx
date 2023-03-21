import { Box, Button, Typography } from '@mui/material'
import React, { useState } from 'react'
const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80vw",
    height: "90%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    backgroundColor:"grey",
    p: 7,
  };

const BookingModal = ({close}) => {
   
  return (
    <Box style={style}>
        <Button style={{cursor:"pointer", position:"absolute", right:30, color:"white",
    backgroundColor:"black", top:10}} onClick={close}>Close</Button>
        <Typography sx={{mt:20}} variant="h2">Add new booking</Typography>
    </Box>
  )
}

export default BookingModal