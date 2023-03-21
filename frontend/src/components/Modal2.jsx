import React, {useState} from 'react'
import Modal from '@mui/material/Modal';
import { Box, Button, Grid, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width:"90vhw",
height:"100%",

    overflow:"scroll",
    display:"flex",
 
    flexWrap:"wrap",
 justifyContent:"center",

    bgcolor: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
const ModalComponent2 = ({open, handleOpen, rooms, handleClose}) => {
    
  return (
    <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={style}>
    <Button style={{position:"absolute",top:5, right:10, backgroundColor:"olive", borderRadius:60, padding:12, color:"black"}} onClick={handleClose}><CloseIcon/></Button>
    {
          rooms.map((image)=> {
            return(
              <Box sx={{flexGrow:1, paddingTop:4}} >
               <img  src={image } style={{width:300, height:150, margin:4}}/>
               
              </Box>
            )
          })
         }
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        {rooms.maxCount}
      </Typography>
    </Box>
  </Modal>
  )
}

export default ModalComponent2