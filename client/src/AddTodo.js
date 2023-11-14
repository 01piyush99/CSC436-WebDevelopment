import React,{useState,useContext} from "react";
import { useResource } from "react-request-hook";
import { stateContext } from "./contexts";

const AddTodo = ({changeTodoState}) => {
const {state,dispatch}=useContext(stateContext);
const {user}=state;
const [ , addTodo ]=useResource(({ title,description, author,dateCreated,isCompleted,dateCompleted})=>({
  url:'/todos',
  method:'post',
  data:{ title, description, author,dateCreated,isCompleted,dateCompleted }
  }))
const [ title, setTitle ] = useState('')
const [ description, setDescription ] = useState('')
function handleTitle (evt) { setTitle(evt.target.value) }
function handleDescription (evt) { setDescription(evt.target.value) }
function addTodoHandler () {
  const date=new Date();
const newTodo={
  title,
  description,
  author: user,
  dateCreated:`${date.toDateString()} at ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
  isCompleted:false,
  dateCompleted:''
};
dispatch({ type: 'ADD_TODO', title, description, author: user })
addTodo(newTodo);
changeTodoState(newTodo.dateCreated);
}
  return (
    <form className="addtodo" onSubmit={(e) =>{e.preventDefault(); addTodoHandler(); setTitle(''); setDescription('');}}>
      <h3 style={{margin:"0"}}>Add a todo</h3>
      <div>
        Author: <b>{user}</b>
      </div>
      <div>
        <label htmlFor="create-title">Title: </label>
        <input type="text" name="create-title" id="create-title" value={title} onChange={handleTitle} required/>
      </div>
      <div>
      <label htmlFor="description">Description: </label>
      <textarea value={description} id="description" onChange={handleDescription}/>
      </div>
      <input type="submit" value="Add to list" />
    </form>
  );
};

export default AddTodo;
