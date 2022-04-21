let initialState={
    list:[]
}
const TodoReducer=(state=initialState,action)=>{
    switch(action.type){
        case "ADD_TODO":return {
            ...state,
            list:[...state.list,action.additem]
        }
        case "DELETE_TODO":return {
            ...state,
            list:[...state.list.filter((element)=>element.id !== action.id)]
        }
        default:return state;
    }
}

export default TodoReducer