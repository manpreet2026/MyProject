import axios from "axios"
import { useState } from "react"
import './style/Update.css'

function Update(){
    const[id,setId]=useState("");
    const[empNo,setEmpNo]=useState("");
    const[empName,setEmpName]=useState("");
    const[empSal,setEmpSal]=useState("");

    async function updateData(e){
        e.preventDefault();
    try {
      const response = await axios.put(`https://backend-fpn2.onrender.com/api/employee/${id}`,{
                empNo,
                empName,
                empSal
            });
            alert('Employee Update');
      
    } catch (err) {
      alert('Error fetching employees: ' + err.message);
    }
    }
    return(
        <div className="div1">
            <div className="div2">
                <h2> Update the Employee Info. by Id </h2>
                <form className="form">
                    <input className="input" type="text" placeholder="Enter the Employee id..." value={id} onChange={(e)=>setId(e.target.value)}/>
                    <input className="input" type="text" placeholder="Enter the Employee No..." value={empNo} onChange={(e)=>setEmpNo(e.target.value)}/>
                    <input className="input" type="text" placeholder="Enter the Employee Name..." value={empName} onChange={(e)=>setEmpName(e.target.value)}/>
                    <input className="input" type="text" placeholder="Enter the Employee sal..." value={empSal} onChange={(e)=>setEmpSal(e.target.value)}/>
                    <br/>
                    <button className="butt" type="submit" onClick={updateData}>Update Employee Info.  </button>
                </form>
            </div>
        </div>
    )
}

export default Update
