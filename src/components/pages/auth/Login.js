import {Grid, Card, Typography, Tabs, Tab , Box} from '@mui/material';
import { useState } from 'react';
import UserLogin from './UserLogin';
import Registrations from './Registrations';


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

    return <>
        <Grid container justifyContent='center'>
            <Grid item sm={5} xs={3}>
            <Card sx={{width:100%", height:100%"}}>
            <Box >
                <Box sx={{borderBottom:1,borderColor:'divider'}}>
                    <Tabs value={value} textColor='primary' indicatorColor='primary' onChange={handleChange}>
                        <Tab label='Login' sx={{textTransform:'none',fontWeight:'bold'}}></Tab>
                        <Tab label='Registration' sx={{textTransform:'none',fontWeight:'bold'}}></Tab>
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0} ><UserLogin></UserLogin></TabPanel>
                <TabPanel value={value} index={1} ><Registrations></Registrations></TabPanel>
            </Box>
        </Card>
            </Grid>
        </Grid>
    </>;
};
export default Login;