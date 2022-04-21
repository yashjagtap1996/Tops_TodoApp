export const addTodo=(additem)=>{
    return {
        type:"ADD_TODO",
        additem
    }
}

export const deleteTodo=(id)=>{
    return {
        type:"DELETE_TODO",
        id
    }
}