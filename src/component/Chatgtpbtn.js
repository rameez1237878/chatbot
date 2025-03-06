import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import {Typography, Box,Button } from "@mui/material";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: 'rgb(55, 65, 81)',
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
    ...theme.applyStyles('dark', {
      color: theme.palette.grey[300],
    }),
    
  },
}));

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div >
      <Button
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        sx={{backgroundColor:'transparent',fontFamily:"sans-serif",fontSize:'font-size: 1.125rem', color:'#b4b4b4', textTransform:'capitalize', padding:'8px 16px', '&:hover':{backgroundColor:'rgba(255, 255, 255, 0.2)'}}}
        disableRipple
      >
        ChatGPT
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{padding:'0px', borderRadius:'20px 20px 0px 0px'}}
      >
        <MenuItem className='dropmenus' onClick={handleClose} disableRipple sx={{columnGap:'30px',padding:'0px', '&:hover':{backgroundColor:'transparent !important'}}}>
          <Box className='dropdwon' sx={{
            backgroundImage:'url(no-auth-upsell-m8ypcpwf.webp)',
            height:'120px',
            width:'100%',
            backgroundSize:'cover',
            }}>  
          </Box>
         <Box>
          <Box sx={{padding:'20px 40px 20px 20px'}}>
          <Typography variant='h2' sx={{color: 'white', textTransform:'none',fontFamily:"sans-serif",fontSize:'20px'}}>
            Try advanced features for free
          </Typography>
          <Typography sx={{paddingTop:'10px',color: 'white', textTransform:'none',fontFamily:"sans-serif",fontSize:'13px', fontWeight:'400'}}>
             Get smarter responses, upload files, create<br/> images, and more by logging in.
          </Typography>
          </Box>
          <Box sx={{paddingLeft:'30px',paddingBottom:'20px', display:'flex',gap:'10px'}}>
             <Button disableRipple sx={{padding: '6px 15px',borderRadius: '25px',backgroundColor: 'white',color: 'black', textTransform:'none','&:hover':{backgroundColor:' rgb(236 236 236 )'},fontSize:'.875rem',fontWeight:'500',fontFamily:"sans-serif"}}>Log in</Button>
             <Button disableRipple sx={{padding: '6px 15px',borderRadius: '25px',backgroundColor:'transparent',color: 'white',border:'solid white 1px', '&:hover':{backgroundColor:'rgba(255, 255, 255, 0.2)'},fontSize:'.875rem',fontWeight:'500',fontFamily:"sans-serif",textTransform:'none'}}>Sign up</Button>
          </Box>
         </Box>
        </MenuItem>
      </StyledMenu>
    </div>
  );
}