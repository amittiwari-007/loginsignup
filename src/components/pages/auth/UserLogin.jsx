import { TextField,Button,Box,Alert } from "@mui/material";
import { useState } from "react";
import { NavLink , useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContexts"; 


const UserLogin=()=>{
    const {login}=useAuth();


    const [loading,setLoading]=useState(false);
    const[error,setError]=useState({
        status:false,
        msg:"",
        type:""
    })
    const navigate=useNavigate();
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualData={
            email:data.get('email'),    
            password:data.get('password')
        }
        if(actualData.email && actualData.password){
            console.log(actualData);
            document.getElementById('login-form').reset();
            try{
                setLoading(true);
                await login(actualData.email,actualData.password);
                setError({status:true,msg:"Login Success",type:"success"});
                setTimeout(()=>{
                    navigate('/dashboard');},3000);
            }
            catch{
                setError({status:true,msg:"Failed to login",type:"error"});
            }
            setLoading(false);
        }
        else{
            console.log("All Fields are required!");
            setError({status:true,msg:"All Fields are Compulsory",type:"error"});
        }
    }

    return <>
    <Box component='form' noValidate sx={{mt:1}} id="login-form" onSubmit={handleSubmit}>
        <TextField margin='normal' required fullWidth id='email' name="email" label="Email Address"></TextField>
        <TextField margin='normal' required fullWidth id='password' name="password" label="Password" type="password"></TextField>
        <Box textAlign='center' sx={{mt:3 ,mb:2,px:5}}>
            <Button type='submit' variant="contained"> Login</Button>
        </Box>
        <NavLink to='/resetpassword' >Forgot Password?</NavLink>
        {error.status?<Alert severity={error.type}>{error.msg}</Alert>:""}
    </Box>
    </>
}
export default UserLogin;