import React from 'react'
import Todo from './Todo'
import { v4 as uuidv4 } from 'uuid';

const TodoList = ({todos,dispatch}) => {
  return (
    <div>
        {todos.map((item, i) => <Todo {...item} dispatch={dispatch} key={uuidv4()} />)}
    </div>
  )
}
export default TodoList