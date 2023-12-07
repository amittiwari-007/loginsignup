import {Grid,TextField,Button,Box,Alert} from '@mui/material';
import { useState } from "react";


const SendPasswordReset=()=>{
    const[error,setError]=useState({
        status:false,
        msg:"",
        type:""
    })
    const handleSubmit=(e)=>{
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualData={
            email:data.get('email'),
        }
        if(actualData.email){
            console.log(actualData);
            document.getElementById('reset-form').reset();
            setError({status:true,msg:"Email sent to your registered email id",type:"success"});
        }
        else{
            setError({status:true,msg:"Enter your email",type:"error"});
        }
    }

    return <>
    <Grid container justifyContent='center'>
        <Grid item sm={6} sx={12}>
        <Box component='form' noValidate sx={{mt:1}} id="reset-form" onSubmit={handleSubmit}>
        <TextField margin='normal' required fullWidth id='email' name="email" label="Email Address"></TextField>
        <Box textAlign='center' sx={{mt:3 ,mb:2,px:5}}>
            <Button type='submit' variant="contained"> Send </Button>
        </Box>
        {error.status?<Alert severity={error.type}>{error.msg}</Alert>:""}
    </Box>
        </Grid>
    </Grid>
    </>
}

export default SendPasswordReset;