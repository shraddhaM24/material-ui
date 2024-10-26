import React, { useState } from 'react';
import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import {} from "@mui/icons-material";
import FastfoodIcon from '@mui/icons-material/Fastfood';
import {Link} from "react-router-dom";
import MenuBookIcon from '@mui/icons-material/MenuBook';

const Header = () => {

  const [menuOpen,setOpenMenu] = useState(false);

  const handleDrawerToggle = () => {
    setOpenMenu(!menuOpen);
  }

  const MenuDrawer = () => {
    return(
      <>
        <Box onClick={handleDrawerToggle} sx={{textAlign:'center'}}>
      <Typography color={'goldenrod'} variant='h6' component='div' sx={{flexGrow:1,my:2}}>
        <FastfoodIcon/>Foodie
      </Typography>
      <Divider/>
      <ul className='nav-menu-mobile'>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/menu"}>Menu</Link>
        </li>
        <li>
          <Link to={"/about"}>About Us</Link>
        </li>
        <li>
          <Link to={"/contactus"}>Conatct Us</Link>
        </li>
      </ul>
    </Box>
      </>
    );
  };

  return (
    <div>
      <Box>
        <AppBar component={'nav'} sx={{bgcolor:'black'}}>
          <Toolbar>
            <IconButton className='test' color='inherit' aria-label='open drawer' edge="start"
              sx = {{
                mr:2,
                display: {sm: 'none'}
              }}
              onClick={handleDrawerToggle}
            >
              <MenuBookIcon/>
            </IconButton>
            <Typography color={'goldenrod'} variant='h6' component='div' sx={{flexGrow:1}}>
              <FastfoodIcon/>Foodie
            </Typography>
            <Box sx={{display: {
              xs:'none',
              sm: 'block'
            }}}>
              <ul className='nav-menu'>
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/menu"}>Menu</Link>
                </li>
                <li>
                  <Link to={"/about"}>About Us</Link>
                </li>
                <li>
                  <Link to={"/contactus"}>Conatct Us</Link>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer variant='temporary' open={menuOpen} onClose={handleDrawerToggle}
            sx={{display:{xs:'block',sm:'none'},
            "& .MuiDrawer-paper" : {
              boxSizing: "border-box",
              width: "240px"
            }
          }}
          >
            <MenuDrawer/>
          </Drawer>
        </Box>
        <Box>
        <Toolbar/>
        </Box>
      </Box>
    </div>
  )
}

export default Header
