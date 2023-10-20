import React, { useState } from "react";

const Register = ({ dispatch }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    passwordRepeat: "",
  });
  
  const handleSubmit=(e)=>{
    e.preventDefault(); 
    dispatch({ type: 'REGISTER',username:formData.username });
  }
  return (
    <form className="register"
      onSubmit={handleSubmit}
    >
      <h2>Register</h2>
      <div>

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
