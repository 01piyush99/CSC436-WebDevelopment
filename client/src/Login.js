import React,{useEffect,useState,useContext} from "react";
import { useResource } from "react-request-hook";
import { stateContext } from "./contexts";

const Login = () => {
    const [username,setUsername]=useState('')
    // const [ loginFailed, setLoginFailed ] = useState(false);
    const [ password, setPassword ] = useState('');
    const {dispatch}=useContext(stateContext);
    const [user, login] = useResource(({username, password}) => ({
      url: "/login",
      method: "post",
      data: { email: username, password },
      }))
      useEffect(() => {
        if (user) {
        if (user?.data?.user) {
        // setLoginFailed(false);
        dispatch({ type: "LOGIN", username: user.data.user.email });
        }
        //  else {
        // setLoginFailed(true);
        // }
        }
        }, [user,dispatch])
    function handleUsername(evt){ setUsername(evt.target.value) }
    function handlePassword (evt) { setPassword(evt.target.value) }
    const handleSubmit=(e)=>{
      e.preventDefault(); 
      login({username, password});
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
      <input type="password" name="login-password" value={password} onChange={handlePassword} id="login-password" />
      </div>
      <input type="submit" value="Login" disabled={username.length === 0}  />
      {/* {loginFailed && <span style={{color:'red',fontWeight:'bold'}}>Incorrect password!! Try again.</span>}  */}
    </form>
  );
};

export default Login;
