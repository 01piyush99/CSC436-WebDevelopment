import React,{useState,useContext} from "react";
import { stateContext } from "./contexts";

const Login = () => {
    const [username,setUsername]=useState('')

    function handleUsername(evt){ setUsername(evt.target.value) }
    const {dispatch}=useContext(stateContext);
    const handleSubmit=(e)=>{
      e.preventDefault(); 
      dispatch({ type: 'LOGIN', username });
    }
  return (
    <form className="login" onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div>
      <label htmlFor="login-username">Username: </label>
      <input type="text" name="login-username" id="login-username" value={username} onChange={handleUsername}/>
      </div>
      <div>
      <label htmlFor="login-password">Password: </label>
      <input type="password" name="login-password" id="login-password" />
      </div>
      <input type="submit" value="Login" disabled={username.length === 0}  />
    </form>
  );
};

export default Login;
