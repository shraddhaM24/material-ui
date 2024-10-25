import React,{useState} from 'react';
import {Button, TextField, Typography} from "@mui/material";

const MaterialList = () => {
  return (
    <div>
        {/* variant actual tag used & component to show the other tag or same depends */}
      <Typography variant='h4' component="h2" sx={{margin:10}}>
        Materail UI
        </Typography>

        <Button variant='text' sx={{mr:5}}>Submit</Button>
        <Button variant='outlined' sx={{mr:5}}>Submit</Button>
        <Button variant='contained' sx={{mr:5}}>Submit</Button>
        <br/>
        <TextField variant='outlined' label="outlined" sx={{mt:5,mr:5}}/>
        <TextField variant='standard' label="standard" sx={{mt:5,mr:5}}/>
        <TextField variant='filled' label="filled" sx={{mt:5,mr:5}}/>
    </div>
  )
}

export default MaterialList
