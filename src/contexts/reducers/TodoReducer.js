// reducers/yourReducer.js
const initialState = {
    list:['Study','Bath','Puja','Lunch']
  };
  
  const TodoReducer = (state = initialState, action) => {
    switch (action.type) {
      // handle different action types here
      case 'ADD':
      return {
        ...state,
        list: [...state.list, action.payload.item],
      };

    case 'DELETE':
      const updatedTodos = [...state.list];
      updatedTodos.splice(action.payload.index, 1);
      return {
        ...state,
        list: updatedTodos,
      };

      case 'EDIT':
        const edited = state.list.map((value,index)=>{
            if(index===action.payload.index){
                return action.payload.item;
            }
            else{
                return value;
            }
        })
        return {
            ...state,
            list: edited,
        };
      default:
        return state;
    }
  };
  
  export default TodoReducer;
  