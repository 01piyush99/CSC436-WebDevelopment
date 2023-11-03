import { useContext } from "react";
import React from "react";
import { stateContext } from "./contexts";

const Logout = () => {
  const {state,dispatch}=useContext(stateContext);
  const {user}=state;
  const handleSubmit=(e)=>{
    e.preventDefault(); 
    dispatch({ type: 'LOGOUT' });
  }
  return (
    <form className="logout" onSubmit={handleSubmit}>
     <span>Logged in as: <b>{user}</b></span> 
      <input type="submit" value="Logout" />
    </form>
  );
};

export default Logout;
