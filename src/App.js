import React from 'react'
import AddTodo from './component/AddTodo'
import TodoList from './component/TodoList'

const App = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <AddTodo />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-3">
            <TodoList />
          </div>
        </div>
      </div>
      
    </>
  )
}

export default App
