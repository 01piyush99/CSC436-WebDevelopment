import React from "react";
import Login from "./Login";
import Logout from "./Logout";
import Register from "./Register";

const UserBar = ({ user, dispatch }) => {
    if (user) {
    return (<>
    <Logout user={user} dispatch={dispatch} />
    </>
    )
    } else {
    return (<>
    <h1 style={{color:"white"}}> Todo App</h1>
    <div className="loginregister">
    <Login dispatch={dispatch} />
    <Register dispatch={dispatch} />
    </div>
    </>
    )
    }
};

export default UserBar;
