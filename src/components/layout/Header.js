import React from 'react';
import { Box, AppBar, Typography, Toolbar, IconButton, Drawer, Divider } from '@mui/material'
import FastfoodIcon from '@mui/icons-material/Fastfood';
import MenuIcon from '@mui/icons-material/Menu';
import {Link, NavLink} from 'react-router-dom'
import '../../styles/HeaderStyles.css'
import { useState } from 'react'
const Header = () => {
    
const[mobileOpen, setMobileOpen] = useState(false);

//handle menubar click
const handleDrawerToggle = () =>{

  setMobileOpen(!mobileOpen)
}
//menu drawer 
const drawer = (
  <Box onClick = {"handleDrawerToggle"} sx ={{textAlign : 'center'}}>
    <Typography 
          color={'goldenrod'} 
          variant='h6' 
          component="div"
          sx={{flexGrow : 1}}>
            <FastfoodIcon/>
            My Restaurant</Typography>
            <Divider/>
            
              <ul className='mobilemenu-menu'>
                <li>
                  <Link to = {'/'}>Home</Link>
                </li>
                <li>
                  <Link to = {'/menu'}>Menu</Link>
                </li>
                <li>
                  <Link to = {'/about'}>About</Link>
                </li>
                <li>
                  <Link to = {'/contact'}>Contact</Link>
                </li>
              </ul>
            
  </Box>
)
  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{bgcolor : "black"}}>
          <Toolbar>
            <IconButton 
            color='inherit'
            aria-label='open drawer'
            edge ='start'
            sx={{
              mr : 2,
            display :{sm: 'none'},
            }}
            onClick = {handleDrawerToggle}
            >
               <MenuIcon/>

            </IconButton>
          <Typography 
          color={'goldenrod'} 
          variant='h6' 
          component="div"
          sx={{flexGrow : 1}}>
            <FastfoodIcon/>
            My Restaurant</Typography>
            <Box sx={{display : {xs : 'none', sm :'block'}}}>
              <ul className='navigation-menu'>
                <li>
                  <NavLink activeClassName ="active"  to = {'/'}>Home</NavLink>
                </li>
                <li>
                  <NavLink to = {'/menu'}>Menu</NavLink>
                </li>
                <li>
                  <NavLink to = {'/about'}>About</NavLink>
                </li>
                <li>
                  <NavLink to = {'/contact'}>Contact</NavLink>
                </li>
              </ul>
            </Box>
          </Toolbar>
          
        </AppBar>
        <Box component= "nav">
           <Drawer variant ='temporary' open = {mobileOpen}
           onClose = {handleDrawerToggle}
           sx= {{display :{sx:'block', sm :'none'},
           "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: "240px",
          },
           }}>
            {drawer}
           </Drawer>
        </Box>
        <Box>
        <Toolbar/>
        </Box>
       
      </Box>
    </>
  )
}

export default Header
