import './style/Update.css';
import React, { useState } from 'react';
import axios from 'axios';

    function Form() {
    
    const [empNo, setEmpNo] = useState('');
    const [empName, setEmpName] = useState('');
    const [empSal, setEmpSal] = useState('');


    async function insert(e){
         e.preventDefault(); 
       try{
        const response = await axios.post('https://myproject-htwk.onrender.com/api/employee',{empNo , empName , empSal});
        //alert(JSON.stringify(response.data,null,2));
        alert("Employee Add");

       }catch(error){
        alert("Hello : " + error.response.data.message);
       }

    }
    
   
    
    return(
        <div className="div1">
            <div className="divv">
                <h2 className="h">Employee Info. Form</h2>
            <form>
                <h4 className="h4"> Employee No</h4>
                <input type="text"
                placeholder="Enter your id..." 
                className="input"                         
                value={empNo}
                onChange={(e) => setEmpNo(e.target.value)}/>


                <h4 className="h4"> EmployeeName </h4>
                <input type="text" 
                placeholder="Enter your EmployeeName..." 
                className="input" 
                value={empName} 
                onChange={(e) => setEmpName(e.target.value)}/>


                <h4 className="h4"> EmployeeSal</h4>
                <input type="text" 
                placeholder="Enter your Sal..." 
                className="input"                         
                value={empSal}
                onChange={(e) => setEmpSal(e.target.value)}/>


                <button type='submit' className='butt' onClick={insert}> submit</button>
               
                
            </form>
            </div>
        </div>
    )
}

export default Form;
