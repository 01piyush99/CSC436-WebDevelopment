import React from "react";
import { useReducer,useEffect} from "react";
import appReducer from "./reducers";
import UserBar from "./UserBar";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import "./App.css";


function App() {
  const initialTodos = [
    {
      title: "Learning React",
      description : "hjvjb",
      author: "Daniel Bugl",
      dateCreated:"Fri Oct 06 2023 at 11:05:22",
      isCompleted:false,
      dateCompleted:""
    },
    {
      title: "Keeping the DOM tree clean!",
      description : "Component Reusability",
      author: "Daniel Bugl",
      dateCreated:"Fri Oct 06 2023 at 11:05:22",
      isCompleted:false,
      dateCompleted:""
    },
    {
      title: "Make your components reusable!",
      description : "Using React Fragments",
      author: "Daniel Bugl",
      dateCreated:"Fri Oct 06 2023 at 11:05:22",
      isCompleted:false,
      dateCompleted:""
    },
  ];
  const [ state, dispatch ] = useReducer(appReducer, { user: '', todos: initialTodos })
  const { user, todos } = state;
  useEffect(() => {
    if (user) {
    document.title = `${user}’s Todo List`
    } else {
    document.title = 'Todo List'
    }
    }, [user])
  return (
    <div className="App">
      <UserBar user={user} dispatch={dispatch} />
      {user && <AddTodo user={user} todos={todos} dispatch={dispatch}/>}
      {user && <TodoList todos={todos}  dispatch={dispatch}/>}
    </div>
  );
}

export default App;
