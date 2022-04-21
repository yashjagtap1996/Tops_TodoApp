import cuid from 'cuid'
import React, {  useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../actions'




const AddTodo = () => {

    const [getInput, setgetInput] = useState("")
    const dispatch = useDispatch()

    


    const handleSubmit = (e) => {
        if(getInput===""){
            alert("Plz Enter Something")
        }
        else{
            e.preventDefault();
            dispatch(addTodo({ items: getInput, id: cuid() }))
            setgetInput("")
        }
        
    }

    return (
        <>
            <h1>Todo App</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name='userInput' value={getInput} onChange={(e) => setgetInput(e.target.value)} />
                <button type='submit'>ADD</button>
            </form>
            
        </>
    )
}

export default AddTodo
