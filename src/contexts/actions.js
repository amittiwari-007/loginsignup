export const addToList = (item) => ({
    type: 'ADD',
    payload:{item}
  });
  
  export const removeFromList = (index) => ({
    type: 'DELETE',
    payload:{index}
  });

  export const editInList = (item,index) => ({
    type: 'EDIT',
    payload:{item,index}
  });
  