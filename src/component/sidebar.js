import React from 'react'
import {Typography, Box,Button,List, ListItem, ListItemText, Divider } from "@mui/material";
import AssistantIcon from '@mui/icons-material/Assistant';
import DifferenceIcon from '@mui/icons-material/Difference';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import PeopleIcon from '@mui/icons-material/People';

function Sidebar({messages}) {

  return (
    <Box >

      <Box>
            <Box sx={{ width: "250px", minHeight:'54vh',maxHeight:'54vh', p: 2, color: "white",overflowY: "auto"  }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Chat History
           </Typography>
           <List>
           {messages.map((msg, index) =>
            msg.sender === "user" ? (
             <React.Fragment key={index}>
           <ListItem>
           <ListItemText primary={msg.text} />
            </ListItem>
           <Divider sx={{ backgroundColor: "rgba(255,255,255,0.2)" }} />
           </React.Fragment>
          ) : null
          )}
       </List>
       </Box>       

      </Box>
      <Box sx={{display:'flex', justifyContent:'left',alignItems:'center',flexDirection:'column'}} >
        <Button disableRipple sx={{padding:'10px 15px','&:hover':{backgroundColor:'rgba(255, 255, 255, 0.2)'}}}>
            <Box sx={{display:'flex', justifyContent:'center',alignItems:'center',gap:'8px'}}>
              <Box sx={{padding:'2px', border:'solid white 1px', borderRadius:'50%',height:'20px',width:'20px'}}>
                <AssistantIcon style={{color:'white',fontSize:'15px'}}/>
              </Box>
            <Box sx={{display:'flex', justifyContent:'left',alignItems:'flex-start',flexDirection:'column'}}>
             <Typography sx={{color:'white', fontFamily:'sans-serif',fontSize:'14px'}}>
                Upgrade plan
             </Typography>
             <Typography sx={{color:'white',fontFamily:'sans-serif',fontSize:'7px',fontWeight:400}}>
               More access to the best models
             </Typography>
             </Box>
          </Box>
        </Button>
        <Button disableRipple sx={{gap:'10px', textTransform:'none', padding:'10px 15px', marginLeft:'-50px',color:'white', fontFamily:'sans-serif',fontSize:'14px','&:hover':{backgroundColor:'rgba(255, 255, 255, 0.2)'}}}><DifferenceIcon style={{color:'white'}}/> Export Chat</Button>
        <Button disableRipple sx={{gap:'10px', textTransform:'none', padding:'10px 15px', color:'white', fontFamily:'sans-serif',fontSize:'14px','&:hover':{backgroundColor:'rgba(255, 255, 255, 0.2)'}}}><RocketLaunchIcon style={{color:'white'}}/> AIPRM for ChatGPT</Button>
        <Button disableRipple sx={{gap:'10px', marginLeft:'-10px',textTransform:'none', padding:'10px 15px', color:'white', fontFamily:'sans-serif',fontSize:'14px','&:hover':{backgroundColor:'rgba(255, 255, 255, 0.2)'}}}><PeopleIcon style={{color:'white'}}/> AIPRM Community</Button>
      </Box>

    </Box>
  )
}

export default Sidebar;

