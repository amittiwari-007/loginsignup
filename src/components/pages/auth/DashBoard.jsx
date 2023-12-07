import {Button,CssBaseline,Grid,Typography} from '@mui/material';
import { useNavigate } from 'react-router';

const DashBoard=()=>{
    const navigate=useNavigate();
    const handleLogout=()=>{
        console.log("LoggedOut Successfully");
        navigate('/login');
    }
    return <>
    <CssBaseline/>
    <Grid>
        <h1>DashBoard</h1>
        <Grid item sm={2} sx={{backgroundColor:'gray',p:5,color:'white'}}>
            <Typography variant='h5'>Email:{localStorage.getItem('email')}</Typography>
            <Typography variant='h6'>Name:{localStorage.getItem('name')}</Typography>
            <Button variant='contained' color='warning' size='large' onClick={handleLogout} sx={{mt:8}}>LogOut</Button>
        </Grid>
        <Grid item sm={8}>

        </Grid>
    </Grid>
    </>
}
export default DashBoard;