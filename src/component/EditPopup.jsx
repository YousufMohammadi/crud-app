import "./../styles/login.css"
import { useNavigate } from "react-router-dom";
export function EditPopup(props) {

   const navigate = useNavigate();

    function handleLogin() {
        navigate("home")
    }
    function cancelEdit() {
        props.setShowEdit(false)
        
    }
return(

    <>
    <div className="login-container">
    
        <form  id="login-form">
        <input type="text" placeholder="Enter your username" className="user-input" placeholder="ali"></input> 
        <input type="password" placeholder="Enter your Password" className="user-pass" placeholder="ali123"></input> 
        <input type="submit" value="Save changes" className="btn-login" onClick={handleLogin}></input> 
        <input type="submit" value="Cancel changes" className="btn-cancel" onClick={cancelEdit}></input> 
        </form>

    </div>
    
    </>
  
)
}
 