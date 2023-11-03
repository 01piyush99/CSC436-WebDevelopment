import React from "react";
import { useReducer,useEffect} from "react";
import { stateContext } from "./contexts";
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
    <stateContext.Provider value={{state, dispatch}}>
    <div className="App">
      <UserBar />
      {user && <AddTodo/>}
      {user && <TodoList todos={todos} />}
    </div>
    </stateContext.Provider>
  );
}

export default App;
