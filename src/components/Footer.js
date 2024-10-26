import React from 'react'
import { Box, Typography } from "@mui/material"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';

const Footer = () => {
  return (
    <div>
    <Box sx={{textAlign:'center',bgcolor:'#1A1A19',color:'white',padding:'3rem'}}>
        <Box sx={{my:3, "& svg" : {
            fontSize:'60px',
            cusror: "pointer",
            mr:"10px"
            },
            "& svg:hover":{
                color:"goldenrod",
                transform:"translateX(5px)",
                transition: "all 400ms"
            }
        }}>
            <InstagramIcon/>
            <FacebookIcon/>
            <TwitterIcon/>
            <GoogleIcon/>
        </Box>
        <Typography variant='h5' xs={{"@media (max-width:600px)":{
            fontSize:"1rem"
        }}}>
            All Rights Reserved &copy; Foodie
        </Typography>
    </Box>
    </div>
  )
}

export default Footer
