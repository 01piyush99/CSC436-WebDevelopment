import React from 'react'
import Todo from './Todo'
import { v4 as uuidv4 } from 'uuid';

const TodoList = ({todos,dispatch}) => {
  return (
    <div>
        {todos.length>0 && todos.map((item, i) => <Todo {...item} dispatch={dispatch} key={uuidv4()} />)}
        {todos.length===0 && <h1 style={{color:"white"}}>No todos found!!</h1>}
    </div>
  )
}
export default TodoList