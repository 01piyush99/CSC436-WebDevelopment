import React, {useEffect, useState,useContext } from "react";
import { useResource } from "react-request-hook";
import { stateContext } from "./contexts";

const Register = () => {
  const {dispatch}=useContext(stateContext);
  const [response,register] = useResource((username, password) => ({
    url: "/users",
    method: "post",
    data:{email: username,password },
    }));
    useEffect(() => {
      if (response && response.data) {
      dispatch({ type: "REGISTER", username: response.data.user.email });
      }
      }, [response,dispatch]);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    passwordRepeat: "",
  });
  // const [error, setError] = useState(null);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // setError(null);
    register(formData.username, formData.password);
};
  return (
    <form className="register"
      onSubmit={handleSubmit}
    >
      <h2>Register</h2>
      <div>
      {/* {error && <div className="error">{error}</div>} */}
      <label htmlFor="register-username">Username: </label>
      <input
        type="text"
        value={formData.username}
        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
        name="register-username"
        id="register-username"
        />
        </div>
        <div>

      <label htmlFor="register-password">Password: </label>
      <input
        type="password"
        name="register-password"
        id="register-password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
      </div>
        <div>
          
      <label htmlFor="register-password-repeat">Repeat password: </label>
      <input
        type="password"
        name="register-password-repeat"
        id="register-password-repeat"
        value={formData.passwordRepeat}
        onChange={(e) =>
          setFormData({ ...formData, passwordRepeat: e.target.value })
        }
        />
        </div>
      <input
        type="submit"
        value="Register"
        disabled={
          formData.username.length === 0 ||
          formData.password.length === 0 ||
          formData.password !== formData.passwordRepeat
        }
      />
    </form>
  );
};

export default Register;
