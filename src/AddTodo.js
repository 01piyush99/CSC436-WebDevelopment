import React,{useState} from "react";

const AddTodo = ({ user,dispatch }) => {
const [ title, setTitle ] = useState('')
const [ description, setDescription ] = useState('')
function handleTitle (evt) { setTitle(evt.target.value) }
function handleDescription (evt) { setDescription(evt.target.value) }
function addTodoHandler () {
dispatch({ type: 'ADD_TODO', title, description, author: user })
}
  return (
    <form className="addtodo" onSubmit={(e) =>{e.preventDefault(); addTodoHandler(); setTitle(''); setDescription('');}}>
      <div>
        Author: <b>{user}</b>
      </div>
      <div>
        <label htmlFor="create-title">Title:</label>
        <input type="text" name="create-title" id="create-title" value={title} onChange={handleTitle} required/>
      </div>
      <div>
      <label htmlFor="description">Description:</label>
      <textarea value={description} id="description" onChange={handleDescription}/>
      </div>
      <input type="submit" value="Create" />
    </form>
  );
};

export default AddTodo;
