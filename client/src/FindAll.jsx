import React, { useState } from 'react';
import axios from 'axios';
import './style/FindAll.css';

function FindAll(){
    const [Employees,setEmployees]=useState([]);
   
    async function Find(e) {
        e.preventDefault();
    try {
      const response = await axios.get('https://myproject-htwk.onrender.com/api/employee');
      setEmployees(response.data);
    //   alert(JSON.stringify(response.data,null,2));
    } catch (err) {
      alert('Error fetching employees: ' + err.message);
    }
  }
    
    return(
        <div className='div1'>
            <div className='div'>
            <h2> All Employees Data</h2>
            <form onSubmit={Find}>
            <button type="submit" className='b'  >Find All Employees Data</button>
            </form>
            <div>
            <table>
                <thead>
                    <th>EmployeeId</th>
                    <th>EmployeeNo</th>
                    <th>EmployeeName</th>
                    <th>EmployeeSal</th>
                </thead>
                <tbody>{
                    Employees.length > 0 ?( Employees.map(emp=>(
                    <tr>
                        <td>{emp._id}</td>
                        <td>{emp.empNo}</td>
                        <td>{emp.empName}</td>
                        <td>{emp.empSal}</td>
                    </tr>
                    ))
                ):<tr><td colSpan={'4'}>No Record </td></tr>
            }
                </tbody>
            </table>
            </div>
        </div>
        </div>
    )
}

export default FindAll
