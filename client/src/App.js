import React from "react";
import { useReducer,useEffect} from "react";
import {useResource} from 'react-request-hook'
import { stateContext } from "./contexts";
import appReducer from "./reducers";
import UserBar from "./UserBar";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import "./App.css";


function App() {
  const [todoData,getTodo]=useResource(()=>({
    url:'/todos',
    method:'get'
    }));

    useEffect(getTodo,[getTodo]);
    useEffect(()=>{
      if (todoData.data && todoData){
      dispatch({type:'FETCH_TODOS',todos:todoData.data.reverse()});
      }
    },[todoData]);      
  const [state,dispatch]=useReducer(appReducer,{ user:'',todos:[]})
  const {user,todos}=state;
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
