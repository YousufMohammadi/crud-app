import "./../styles/login.css"
import { useNavigate } from "react-router-dom";
export function Login() {
   const navigate = useNavigate();
    function handleLogin() {
        navigate("home")
    }
return(

    <>
    <div className="login-container">
    
        <form  id="login-form">
        <input type="text" placeholder="Enter your username" className="user-input"></input> 
        <input type="password" placeholder="Enter your Password" className="user-pass"></input> 
        <input type="submit" value="Login" className="btn-login" onClick={handleLogin}></input> 
        </form>

    </div>
    
    </>
  
)
}
 