import "./../styles/home.css"
import { DeletePopup } from "./DeletePopup";
import { useGlobal } from "./zustand";
import { EditPopup } from "./EditPopup";
import { useState } from "react";
import { useEffect } from "react";
export function Home() {
    
    useEffect(()=>{

    } ,[])
    const users = useGlobal(state=>state.users)
    const hanadlSelectedRow = useGlobal(state=>state.hanadlSelectedRow) 

    const [showDelete ,setShowDelete] = useState(false)
    const [showEdit ,setShowEdit] = useState(false) 


    function handleDelete(e) {
        setShowDelete(true)
        
        const  filteredRow = users.filter(user => {
                if(user.userName == e.target.id) {
                    return user
                }
        })
        console.log(filteredRow[0]);
        
        hanadlSelectedRow(filteredRow[0])

        }
    function handleEdit() {
        console.log(showEdit);
        
        setShowEdit(true)
    }

    return(<>
    <div className="table-container">
        
        
       {
           showEdit == true?  <EditPopup setShowEdit={setShowEdit}/> : ""
       } 
        
        {
                       showDelete==true? <DeletePopup setShowDelete={setShowDelete} />:"" 
        }
        {/* <h2 className="table-header">List of users accounts</h2> */}
        <table>
            <thead>
                <th>User name</th>
                <th>Password</th>
                <th>Settings</th>
            </thead>
            <tbody>

                {

                    users.map(user=>(
                <tr>
                    <td id={user.userName}>{user.userName}</td>
                    <td id={user.pass}>{user.pass}</td>
                    <td >
                        <img src="edit.svg" alt="edit"  className="td-settings" onClick={handleEdit}/>
                        <img src="delete.svg" name={user.userName} id={user.userName} alt="delete" className="td-settings"  onClick={handleDelete} />
                    </td>
                </tr>                        
                    ))
                }


            </tbody>
        </table>
    </div>
    
    
    </>)
    
}