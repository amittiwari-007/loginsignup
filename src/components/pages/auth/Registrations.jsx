import { TextField,Button,Box,Alert, FormControlLabel ,Checkbox} from "@mui/material";
import { NavLink , useNavigate } from "react-router-dom";
import { useState } from "react";
import { CheckBox } from "@mui/icons-material";

const Registrations=()=>{
    const[error,setError]=useState({
        status:false,
        msg:"",
        type:""
    })
    const navigate=useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualData={
            email:data.get('email'),
            name:data.get('name'),
            password:data.get('password'),
            password_confirmation:data.get('password_confirmation'),
            tc:data.get('tc')
        }
        if(actualData.name && actualData.email && actualData.password && actualData.tc!==null){
            if(actualData.password===actualData.password_confirmation){
                console.log(actualData);
                document.getElementById('registration-form').reset();
                setError({status:true,msg:"Registration Success",type:"success"});
                navigate('/dashboard');
            }
            else{
                setError({
                    status:true,
                    msg:"Password and confirm password doesn't match ",
                    type:'error'
                })
            }
        }
        else{
            console.log("All Fields are required!");
            setError({status:true,msg:"All Fields are Compulsory",type:"error"});
        }
    }
    return (
        <>
        <Box component='form' noValidate  id="registration-form" onSubmit={handleSubmit}>
            <TextField margin='normal' required fullWidth id='email' name="email" label="Email Address"></TextField>
            <TextField margin='normal' required fullWidth id='name' name="name" label="Name"></TextField>
            <TextField margin='normal' required fullWidth id='password' name="password" label="Password" type="password"></TextField>
            <TextField margin='normal' required fullWidth id='password_confirmation' name="password_confirmation" label="Confirm Password" type="password"></TextField>
            <FormControlLabel control={<Checkbox value="agree" color="primary" name="tc" id="tc" />} label="I agree to term and condition." />
            <Box textAlign='center' sx={{mt:3 ,mb:2,px:5}}>
                <Button type='submit' variant="contained"> SignUp</Button>
            </Box>
            {error.status?<Alert severity={error.type}>{error.msg}</Alert>:""}
        </Box>
        </>
    )
}
export default Registrations;