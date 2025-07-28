const express = require('express');
const mongoose = require('mongoose');
const cors=require('cors');

const app = express();


app.listen(3001,() =>{
    console.log('server start on http://localhost:3001');
});

//Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());

//connect() function already define in mongoose.
async function connectDB(){
    try{
        await mongoose.connect('mongodb://localhost:27017/company');
        console.log('mongoDB connected');
    }
    catch(error){
        console.error('mongoDB connection failed:', error);
        process.exit(1);
    }
}

connectDB();

//schema() function already define in mongoose.
const employeeschema = new mongoose.Schema({
    empNo:    {type: Number, required: true},
    empName:  {type: String , required: true , unique:true},
    empSal:   {type:Number , required:true}
},
{
    timestamps: false,
    versionKey: false
});

    const Employee = mongoose.model('Employee', employeeschema);

    //create new employee
app.post('/api/employee', async(req , res)=>{
    try{
        const employee=new Employee(req.body);
        const savedEmployee= await employee.save();
       // res.status(201) . json(savedEmployee);     //or use send(savedEmployee);
       res.status(201) . json({"message":"Employee Object Saved"});

    }
    catch (error){
        res.status(400).json({message: error.message});
    }
});

//find all
app.get('/api/employee', async(req , res)=>{
    try{
        const employee=await Employee.find();
        res.json(employee);     
    }
    catch (error){
        res.status(500).json({message: error.message});
    }
});


//get one employee data by id
app.get('/api/employee/:id', async(req , res)=>{
    try{
        const employee=await Employee.findById(req.params.id);
        if(!employee){
            return res.status(400).json({message:'Employee not found.'})
        }
        res.json(employee);     
    }
    catch (error){
        res.status(500).json({message: error.message});
    }
});

//delete by id
app.delete('/api/employee/:id', async(req , res)=>{
    try{
        const employee=await Employee.findByIdAndDelete(req.params.id);
        if(!employee){
            return res.status(404).json({message:'Employee not found.'})
        }
            res.json({message:'Employee delete Successfully'});     
    }
    catch (error){
        res.status(500).json({message: error.message});
    }
});



app.put('/api/employee/:id', async(req , res)=>{
    try{
        const UpdatedEmployee = await Employee.findByIdAndUpdate(
            req.params.id,
            req.body,
        {
            new : true,
            runvalidator : true
        });
           if(!UpdatedEmployee)
            return res.status(400).json({message :'Employee not found.'});
            res.json(UpdatedEmployee);
}
catch (error){
    res.status(400).json({message: error.message});
}
});