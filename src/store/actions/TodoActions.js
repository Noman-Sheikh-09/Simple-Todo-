 export const addTodo =(data)=>{
     return {
            type:'ADD_ITEM',
            payload: {
                   id: new Date().getTime().toString(),
                   data : data,
            }
     }
 }

 export const deleteTodo =()=>{
    return {
           type:'DELETE_ITEM'
    }
}

