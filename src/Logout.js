import React from "react";

const Logout = ({user, dispatch}) => {
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
