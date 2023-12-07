import React,{useState,useRef,useEffect} from 'react';
import '../../components/Cards.css';
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
        props.setList((prev)=>{
            return prev.map((value,index)=>{
                if(index===props.index){
                    return editItem;
                }
                else{
                    return value;
                }
            })
        })
    }
    const DeleteHandler=()=>{
        props.setList((prev)=>{
            return prev.filter((element,index)=>{
                if(index===props.index){
                    return false;
                }
                return true;
            })
        })
    }
    return (
        <div className='container'>
            {edit ? <input ref={Ref} onChange={ChangeHandler} value={editItem}></input> : <div className='tasks'>{props.text}</div>}
            
            <div className='buttons'>
                {edit ? <button onClick={ClickHandler} className='shadow-xl rounded-md w-24'>Save</button>:<button onClick={editBehaviour} className='shadow-xl rounded-md w-24'>Edit</button>}
                <button onClick={DeleteHandler} className='shadow-xl rounded-md w-24'>Delete</button>
            </div>
        </div>
    )
}

export default Cards;