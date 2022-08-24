import "./../styles/deletePopup.css"
import { useGlobal } from "./zustand"
export function DeletePopup(props) {
        const selectedRow = useGlobal(state=> state.selectedRow)
        const  users  = useGlobal(state => state.users)
        const  handleUsers  = useGlobal(state => state.handleUsers)
        
        function cancleDelete() {
            props.setShowDelete(false)
        }
        function deleteRow() {
            const  filterUsers  = users.filter(user => {
                if(user.userName != selectedRow.userName) {
                    return user
                }
            })
            handleUsers([...filterUsers])

            props.setShowDelete(false)

        }
    return(<>
    <div className="delete-container">

        <div className="delete-popup">

        <p className="delete-par">Do you want to delete this user from system?</p>
        <input type="submit" value="Yes" className="btn btn-delete" onClick={deleteRow}/>
        <input type="submit" value="No" className="btn btn-edite" onClick={cancleDelete}/>

        </div>

    </div>
    </>)
    
}