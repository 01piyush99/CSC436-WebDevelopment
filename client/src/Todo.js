import React,{useContext} from 'react';
import { useResource } from 'react-request-hook';
import { stateContext } from './contexts';
import { v4 as uuidv4 } from 'uuid';
import './Todo.css';

const Todo = ({title, description, author,dateCreated,isCompleted,dateCompleted,id }) => {
  const uid=uuidv4();
  const {state,dispatch}=useContext(stateContext);
  const [_,deleteTodo]= useResource((id) => ({
    url: `/todos/${id}`,
    method: 'delete',
  })); 
  const handleCheck = async (e) => {
    dispatch({ type: "TOGGLE_TODO", title: title });
    try {
      const date=new Date();
      const response=await fetch(`http://localhost:4000/todos/${id}`,{
        method:'PATCH',
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify({
          isCompleted: !isCompleted,
          dateCompleted: !isCompleted ? `${date.toDateString()} at ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}` : null,
        }),
      });

      if (response.ok) {
        const data=await response.json();
        console.log(data);
      } else console.error('Update request failed');
    } catch (error){
      console.error('An error occurred',error);
    }
  };
  const deleteTodoHandler=(e)=> {
    deleteTodo(id);
    dispatch({type:"DELETE_TODO",title:title});
  }
  return (
    <div className="todo">
      <section className="leftcontent">
      <div>

      <p className="title">{title}</p>
      <span>{description}</span>
      </div>
      {!isCompleted && <p>Created on <br/>{dateCreated}</p>}
      {isCompleted && <p>Completed on <br/>{dateCompleted}</p>}
      </section>
      <section className="rightcontent">
        
      <i>
        <b>{author}</b>'s todo
      </i>
      <div>
      <input type="checkbox" onChange={handleCheck} id={uid} value="completed" checked={isCompleted}></input>
      <label htmlFor={uid}>Completed</label>
      </div>
      <button className="deletebtn" onClick={deleteTodoHandler} >Delete</button>
      </section>
    </div>
  );
};

export default Todo;
