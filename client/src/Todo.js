import React,{useContext} from 'react';
import { stateContext } from './contexts';
import { v4 as uuidv4 } from 'uuid';
import './Todo.css';

const Todo = ({ title, description, author,dateCreated,complete,dateCompleted }) => {
  const uid=uuidv4();
  const {dispatch}=useContext(stateContext);
  const handleCheck=(e)=> {
    dispatch({type:"TOGGLE_TODO",title:title});
  }
  const deleteTodoHandler=(e)=> {
    dispatch({type:"DELETE_TODO",title:title});
  }
  
  return (
    <div className="todo">
      <section className="leftcontent">
      <div>

      <p className="title">{title}</p>
      <span>{description}</span>
      </div>
      {!complete && <p>Created on <br/>{dateCreated}</p>}
      {complete && <p>Completed on <br/>{dateCompleted}</p>}
      </section>
      <section className="rightcontent">
        
      <i>
        <b>{author}</b>'s todo
      </i>
      <div>
      <input type="checkbox" onChange={handleCheck} id={uid} value="completed" checked={complete}></input>
      <label htmlFor={uid}>Completed</label>
      </div>
      <button className="deletebtn" onClick={deleteTodoHandler} >Delete</button>
      </section>
    </div>
  );
};

export default Todo;
