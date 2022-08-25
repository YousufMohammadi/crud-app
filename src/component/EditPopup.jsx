import "./../styles/login.css"
import { useNavigate } from "react-router-dom";
import { useGlobal } from "./zustand";
export function EditPopup(props) {
   const selectedRow =useGlobal(state => state.selectedRow)
   const users = useGlobal(state => state.users) 
   const handleUsers = useGlobal(state => state.handleUsers)

   const navigate = useNavigate();

    function handleEdit(e) {
        e.preventDefault()
        // navigate("home")
    let filteredRow =  users.filter(user =>{
            if (user.userName != selectedRow.userName && user.pass != selectedRow.pass) {
                return user
            }
        })

           let newRow = {
                userName:e.target.userName.value,
                pass: e.target.password.value
            }

            filteredRow = [newRow , ...filteredRow  ]


            console.log(filteredRow);
            handleUsers([...filteredRow])
            props.setShowEdit(false)

    }


    function cancelEdit() {
        props.setShowEdit(false)
        
    }

return(

    <>
    <div className="login-container">
            
        <form  id="login-form" onSubmit={handleEdit}>
        <input type="text" id="userName" name="userName" className="user-input" defaultValue={selectedRow.userName}></input> 
        <input type="password" id="password" name="password" className="user-pass" defaultValue={selectedRow.pass}></input> 
        <input type="submit" value="Save changes" className="btn-login" ></input> 
        <input type="button" value="Cancel changes" className="btn-cancel" onClick={cancelEdit}></input> 
        </form>

    </div>
    
    </>
  
)
}
 