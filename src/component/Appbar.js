import React from 'react'
import { Box,Button } from "@mui/material";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import CustomizedMenus from './Chatgtpbtn'


function Appbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <Box className='appbar'>
      <Box className='leftside'>
          <Box><BorderColorIcon style={{color:'white'}}/></Box>
          <Box>
              <CustomizedMenus />
          </Box>
      </Box>
      <Box className='rightside'> 
          <Button disableRipple sx={{padding: '6px 15px',borderRadius: '25px', backgroundColor: 'white',color: 'black', textTransform:'none','&:hover':{backgroundColor:' rgb(236 236 236 )'},fontFamily:"sans-serif",fontSize:'.875rem',fontWeight:'500'}}>Log in</Button>
          <Button disableRipple className="signupbtn" sx={{padding: '6px 15px',borderRadius: '25px', backgroundColor:'transparent',color: 'white',border:'solid white 1px', '&:hover':{backgroundColor:'rgba(255, 255, 255, 0.2)'},fontSize:'.875rem',fontWeight:'500',fontFamily:"sans-serif",textTransform:'none'}}>Sign up</Button>
      </Box>
    </Box>
  </Box>
  )
}

export default Appbar;