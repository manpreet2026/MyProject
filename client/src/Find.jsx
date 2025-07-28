import { useState } from "react"
import axios from "axios"
import './style/find.css';

function Find(){
    const[id,setId]=useState("");
    const[employee,setEmp]=useState(null);


    async function findOne(e){
        
        e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:3001/api/employee/${id}`);
      setEmp(response.data);
      
    } catch (err) {
      alert('Error fetching employees: ' + err.message);
    }
    }
    return(
        <div className="div1">
            <div className="div22">
                <h2 className="h"> Find One Employee by Id</h2>
                <form className="form">
                    <input className="input" type="text" placeholder="Enter the Employee Id...." value={id} onChange={(e)=>setId(e.target.value)}/>
                    <button className="butt" onClick={findOne} >FindOne Employee</button>
                </form>
                {employee &&(
                    <div className="div3">
                        <h4 className="h4">Employee Details</h4>
                        <p className="p">EmpId:{employee._id}</p>
                        <p className="p">EmpNo:{employee.empNo}</p>
                        <p className="p">EmpName:{employee.empName}</p>
                        <p className="p">EmpSal:{employee.empSal}</p>
                    </div>
                )}
            </div>
        </div>
    )
}
export default Find