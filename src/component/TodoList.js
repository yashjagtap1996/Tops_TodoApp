import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RiDeleteBin2Fill } from "react-icons/ri";
import { deleteTodo } from '../actions';


const fetchUser = () => (
  console.log("called"),
  {
    type: "FETCH_USER",
    promise: fetch('https://jsonplaceholder.typicode.com/users'),
    success: true
  });

const TodoList = () => {
  


    const Data=useSelector((state)=>state.TodoReducer.list)
    const dispatch=useDispatch();
  const users = useSelector((state) => state.apiReducer.users)
  useEffect(() => {
    console.log(users);
  }, [users])

  return (
    <>
        {
            Data.map((element)=>{
                return <div className='todolist mt-2'>
                        {element.items}
                        <span><button onClick={()=>dispatch(deleteTodo(element.id))}><RiDeleteBin2Fill /></button></span>
                </div>
            })
        }
        <button className='btn btn-danger' onClick={()=>dispatch(fetchUser())}>Show User</button>
    </>
  )
}

export default TodoList
