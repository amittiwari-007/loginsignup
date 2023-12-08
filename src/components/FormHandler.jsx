import React,{useState} from 'react';
import './FormHandler.css';
import { connect } from 'react-redux';
import {removeFromList, addToList} from "../contexts/actions"

const FormHandler=(props)=>{
    const [item,setItem]=useState('');
    const ChangeHandler=(event)=>{
        setItem(event.target.value);
        console.log(item);
    }
    const ClickHandler=()=>{
        if(item.length>0){
            props.addToList(item)
        }
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


const mapStateToProps = (state) => ({
    list: state.TodoReducer.list,
  });
  
  const mapDispatchToProps = (dispatch) => ({
    addToList: (item) => dispatch(addToList(item)),
    removeFromList: (index) => dispatch(removeFromList(index)),
  });
  

export default connect(mapStateToProps, mapDispatchToProps)(FormHandler);