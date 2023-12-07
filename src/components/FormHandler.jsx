import React,{useState} from 'react';
import './FormHandler.css';

const FormHandler=(props)=>{
    const [item,setItem]=useState('');
    const ChangeHandler=(event)=>{
        setItem(event.target.value);
        console.log(item);
    }
    const ClickHandler=()=>{
        if(item.length>0){
            props.setList((prev)=>{
            setItem('');
            return [...prev,item];
        })}
    }
return (
    <>
    <div>
        <div className='flex-container'>
        <input onChange={ChangeHandler}  className="input-box" type="text" value={item}  placeholder="Add item here"/>
        <button onClick={ClickHandler} className='rounded-md button w-24 '> Add </button>
        </div>
    </div>
    </>
);
}

export default FormHandler;