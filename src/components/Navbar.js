import {Box,AppBar,Toolbar,Typography,Button} from '@mui/material';
import { NavLink } from 'react-router-dom';

const Navbar=()=>{
    return (<>
    <Box sx={{flexGrow:1}}>
        <AppBar position='static' color="primary">
        <Toolbar>
            <Typography variant='h5' component='div' sx={{flexGrow:1}}>
                IIIT
            </Typography>
            <Button component={NavLink} to='/' sx={{color:'white',textTransform:'none'}} style={({isActive})=>{return {backgroundColor:isActive?'#1949D6':''}}}>Home</Button>
            <Button component={NavLink} to='/contact' sx={{color:'white',textTransform:'none'}} style={({isActive})=>{return {backgroundColor:isActive?'#1949D6':''}}}>Contact</Button>
            <Button component={NavLink} to='/login' sx={{color:'white',textTransform:'none'}} style={({isActive})=>{return {backgroundColor:isActive?'#1949D6':''}}}>Login</Button>
        </Toolbar>
        </AppBar>
    </Box>
    </>)
};

export default Navbar;