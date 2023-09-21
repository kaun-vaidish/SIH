import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { styled } from "@mui/material";
import { FlightTakeoff } from '@mui/icons-material';

const StyledToolbar = styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between",
})

const NavbarMui = () => {
  return (
    <AppBar position='sticky'>
        <StyledToolbar>
        <Typography variant='h6' sx={{display:{xs:"none",sm:"block"}}}>
            Voyage Virtuoso
        </Typography>
        <FlightTakeoff sx={{display:{xs:"block",sm:"none"}}}/>
        </StyledToolbar>  
    </AppBar>
  )
}

export default NavbarMui