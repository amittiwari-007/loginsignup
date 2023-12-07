import { useState } from "react";
import FormHandler from "../FormHandler";
import Output from "./Output";
import './App.css'
const Home=()=>{
    const [list,setList]=useState(['Study','Bath','Puja','Lunch']);
    return (
        <>
        <h1 className='name flex justify-center items-center'>Home Page</h1>
        <hr/>
        <FormHandler setList={setList}/>
        <Output list={list} setList={setList}/>
        </>
  );
}
export default Home;