import React from "react";

const Logout = ({user, dispatch}) => {
  return (
    <form className="logout" onSubmit={(e) => {e.preventDefault(); dispatch({ type: 'LOGOUT' });}}>
     <span>Logged in as: <b>{user}</b></span> 
      <input type="submit" value="Logout" />
    </form>
  );
};

export default Logout;
