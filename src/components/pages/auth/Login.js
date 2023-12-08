import {Grid, Card, Typography, Tabs, Tab , Box} from '@mui/material';
import { useState } from 'react';
import UserLogin from './UserLogin';
import Registrations from './Registrations';
import useMediaQuery from '@mui/material/useMediaQuery';


const TabPanel=(props)=>{
    const { children , value , index} = props;
    return (
        <div role='tabpanel1' hidden={value!==index}>
            {value===index && (<Box>{children}</Box>)}
        </div>
    )
}


const Login=()=>{
    const[value,setValue]=useState(0);
    
    const handleChange=(event,newvalue)=>{
        console.log(newvalue);
        setValue(newvalue);
    }

    const isMobile = useMediaQuery('(max-width:600px)'); 
    return <>
        <Grid  justifyContent='center' mt={10} mb={10}>
            <Grid item sm={5} xs={3} sx={{width:isMobile?"80%":"40%", height:"100%", margin:"auto"}}>
            <Card sx={{width:"100%", height:"100%"}}>
            <Box>
                <Box sx={{borderBottom:1,borderColor:'divider'}}>
                    <Tabs  value={value} textColor='primary' indicatorColor='primary' onChange={handleChange}>
                        <Tab label='Login' sx={{textTransform:'none',fontWeight:'bold'}}></Tab>
                        <Tab label='Registration' sx={{textTransform:'none',fontWeight:'bold'}}></Tab>
                    </Tabs>
                </Box>
                <Box p={5}>
                <TabPanel value={value} index={0} ><UserLogin></UserLogin></TabPanel>
                <TabPanel value={value} index={1} ><Registrations></Registrations></TabPanel>
                </Box>
            </Box>
        </Card>
            </Grid>
        </Grid>
    </>;
};
export default Login;