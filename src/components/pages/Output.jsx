import React from 'react';
import Cards from './Cards';
import { connect } from 'react-redux';
import {removeFromList, addToList} from "../../contexts/actions"
import "./Output.css"

const Output=(props)=>{
    
    return (
        <div className='list-container'> 
        {props.list.map((text,index)=>{
            return <Cards text={text} index={index}></Cards>
        })}
        </div>
    )
}

const mapStateToProps = (state) => ({
    list: state.TodoReducer.list,
  });
  
  const mapDispatchToProps = (dispatch) => ({
    addToList: (item) => dispatch(addToList(item)),
    removeFromList: (index) => dispatch(removeFromList(index)),
  });
  

export default connect(mapStateToProps, mapDispatchToProps)(Output);