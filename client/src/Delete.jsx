import { useState } from "react"
import axios from "axios"
import './style/Delete.css'

function Delete(){
    const[id,setId]=useState("");

    async function deleteOne(e){
     e.preventDefault();
    try {
      const response = await axios.delete(`https://backend-fpn2.onrender.com/api/employee/${id}`);
    alert("employee delete");
      
    } catch (err) {
      alert('Error fetching employees: ' + err.message);
    }
}
    return(
        <div className="div1">
            <div className="divv22">
                <h2 className="h">Delete the  Employee Info....</h2>
                <form>
                    <input className="input" type="text" placeholder="Enter the Employee id..."  value={id} onChange={(e)=>setId(e.target.value)} />
                    <button type="submit" className="butt" onClick={deleteOne}>DeleteOne Employee</button>
                </form>
            </div>
        </div>
    )
}
export default Delete
