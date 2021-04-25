import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CreateUser from "./CreateUser";
import { useHistory } from "react-router-dom";
import { loginRequest } from "../fetchRequests";
import { LOGIN, useStore } from "../store";

function Login(props) {
  const dispatch = useStore((state) => state.dispatch);
  const history = useHistory();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    loginRequest(formData.username, formData.password).then((userData) =>
      dispatch({ type: LOGIN, payload: userData.id })
    );
    history.push("/todo");
  };

  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setFormData((state) => ({ ...state, [inputName]: inputValue }));
  };

  useEffect(() => {
    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  function handleMessage(event) {}

  function googleLogin(e) {
    window.open(
      "https://socialapp-api.herokuapp.com/auth/google/login",
      "top=100,left=100,height=300,width=700,toolbar=no,resizable=no"
    );
  }

  return (
    <>
      <div>
        <form id="login-form" onSubmit={handleLogin}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            autoFocus
            required
            onChange={handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            required
            onChange={handleChange}
          />
          {/* <Link to="/todo"> */}
          <button
            style={{
              marginLeft: 10 + "px",
            }}
            type="submit"
          >
            Login
          </button>
          {/* </Link> */}
        </form>
        {/* <button
          style={{
            marginLeft: 10 + "px",
          }}
          onClick={googleLogin}
        >
          Google Login
        </button> */}
        <Link to="/createUser">
          <button
            style={{
              marginLeft: 10 + "px",
            }}
          >
            Create User
          </button>
        </Link>
      </div>
    </>
  );
}

export default Login;
