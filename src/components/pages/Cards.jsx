import React,{useState,useRef,useEffect} from 'react';
import '../../components/Cards.css';
import { connect } from 'react-redux';
import {removeFromList, addToList, editInList} from "../../contexts/actions"

const Cards =(props)=>{
    const Ref=useRef(null);
    const [editItem,setEditItem]=useState();
    const [edit,setEdit]=useState(false);
    useEffect(()=>{
        if (Ref.current && edit) {
            Ref.current.focus();
          }
    },[edit]);
    const editBehaviour=()=>{
        if(!edit){
            setEdit(true);
            setEditItem(props.text);
            
        }
    }
    const ChangeHandler=(event)=>{
        setEditItem(event.target.value);
    }
    const ClickHandler=()=>{
        setEdit(false);
        props.editInList(editItem,props.index)
    }
    const DeleteHandler=()=>{
        props.removeFromList(props.index)
    }
    return (
        <div className='container'>
            {edit ? <input ref={Ref} onChange={ChangeHandler} value={editItem}></input> : <div className='tasks'>{props.text}</div>}
            
            <div className='buttons'>
                {edit ? <div onClick={ClickHandler} className='card-button shadow-xl rounded-md w-24'>Save</div>:<div onClick={editBehaviour} className='card-button shadow-xl rounded-md w-24'>Edit</div>}
                <div onClick={DeleteHandler} className='card-button shadow-xl rounded-md w-24'>Delete</div>
            </div>
        </div>
    )
}


const mapStateToProps = (state) => ({
    list: state.TodoReducer.list,
  });
  
  const mapDispatchToProps = (dispatch) => ({
    addToList: (item) => dispatch(addToList(item)),
    removeFromList: (index) => dispatch(removeFromList(index)),
    editInList:(item,index) =>dispatch(editInList(item,index))
  });
  

export default connect(mapStateToProps, mapDispatchToProps)(Cards);