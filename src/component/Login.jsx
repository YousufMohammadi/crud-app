import "./../styles/login.css";
import { useNavigate } from "react-router-dom";
import { useGlobal } from "./zustand";
export function Login() {
  const navigate = useNavigate();
  const users = useGlobal((state) => state.users);

  function handleLogin(e) {
    e.preventDefault();
    let exist = false;
    users.map((user) => {
      if (
        user.userName == e.target.userName.value &&
        user.pass == e.target.password.value
      ) {
        exist = true;
      }
    });

    if (exist) {
      navigate("/Home");
    } else {
      alert("incorrect usernam or pawsowed");
    }
  }
  return (
    <>
      <div className="login-container">
        <form id="login-form" onSubmit={handleLogin} method="POST" action="#">
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
          <input type="submit" value="Login" className="btn-login"></input>
        </form>
      </div>
    </>
  );
}
