import React,{useState} from "react";

const Login = ({dispatch}) => {
    const [ username, setUsername ] = useState('')
function handleUsername (evt) { setUsername(evt.target.value) }
  return (
    <form className="login" onSubmit={(e) => {e.preventDefault(); dispatch({ type: 'LOGIN', username });}}>
      <h2>Login</h2>
      <div>
      <label htmlFor="login-username">Username:</label>
      <input type="text" name="login-username" id="login-username" value={username} onChange={handleUsername}/>
      </div>
      <div>
      <label htmlFor="login-password">Password:</label>
      <input type="password" name="login-password" id="login-password" />
      </div>
      <input type="submit" value="Login" disabled={username.length === 0}  />
    </form>
  );
};

export default Login;
