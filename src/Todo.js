import React from "react";
import { v4 as uuidv4 } from 'uuid';
import './Todo.css'

const Todo = ({ title, description, author,dateCreated,complete,dateCompleted ,dispatch}) => {
  const uid=uuidv4();
  const handleCheck=(e)=> {
    dispatch({type:"TASK_MANIPULATED",title:title});
  }
  return (
    <div className="todo">
      <section className="leftcontent">
      <div>

      <p className="title">{title}</p>
      <span>{description}</span>
      </div>
      {!complete && <p>Created on <br/>{dateCreated}</p>}
      {complete && <p>completed on <br/>{dateCompleted}</p>}
      </section>
      <section className="rightcontent">
        
      <i>
        Written by <b>{author}</b>
      </i>
      <div>
      <input type="checkbox" onChange={handleCheck} id={uid} value="completed" checked={complete}></input>
      <label htmlFor={uid}>Completed</label>
      </div>
      </section>
    </div>
  );
};

export default Todo;
