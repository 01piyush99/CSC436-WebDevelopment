import React,{useContext} from "react";
import Login from "./Login";
import Logout from "./Logout";
import Register from "./Register";
import { stateContext } from "./contexts";

const UserBar = () => {
    const {state}=useContext(stateContext);
    const {user}=state;
    if (user) {
    return (<>
    <Logout />
    </>
    )
    } else {
    return (<>
    <h1 style={{color:"white"}}> Todo App</h1>
    <div className="loginregister">
    <Login />
    <Register />
    </div>
    </>
    )
    }
};

export default UserBar;
