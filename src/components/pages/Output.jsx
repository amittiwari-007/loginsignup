import React from 'react';
import Cards from './Cards';

const Output=(props)=>{
    
    return (
        <div>
        {props.list.map((text,index)=>{
            return <Cards setList={props.setList} text={text} index={index}></Cards>
        })}
        </div>
    )
}
export default Output;