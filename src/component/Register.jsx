import "./../styles/login.css";

import { useNavigate } from "react-router-dom";
import { useGlobal } from "./zustand";

export function Register() {
  const navigate = useNavigate();
  const users = useGlobal((state) => state.users);
  const handleUsers = useGlobal(state => state.handleUsers)
  
  function handleRegister(e) {
    e.preventDefault()
    const insertRow ={
        userName :e.target.userName.value,
        pass : e.target.password.value
    }
//   console.log("sdsd",insertRow);
    handleUsers([...users,insertRow])
    navigate("/Home")
  }
  return (
    <>
      <div className="login-container">
        <form id="login-form" onSubmit={handleRegister} method="POST" action="#">
          <input
            type="text"
            placeholder="Enter your username"
            id="userName"
            name="userName"
            className="user-input"
          ></input>
          <input
            type="password"
            placeholder="Enter your Password"
            id="password"
            name="password"
            className="user-pass"
          ></input>
          <input type="submit" value="Register" className="btn-login"></input>
        </form>
      </div>
    </>
  );


}
