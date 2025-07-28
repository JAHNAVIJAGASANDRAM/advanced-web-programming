import express from 'express';
import fs from 'fs';
 
const app= express();
const port=3000;
//const path = require('path');
app.use(express.json());
const filePath="studentdata/Students.json";

function readData(){
    const data=fs.readFileSync(filePath,"utf8");
    return JSON.parse(data);
}
function writeData(data){
    fs.writeFileSync(filePath,JSON.stringify(data,null,2));
}
app.get("/Students",(req,res)=>{
    const data=readData();
    res.json(data);
});/*
app.get("/Students/:id",(req,res)=>{
    const Students=readData();
    const student=Students.find(s=>s.id===req.params.id);
    if(student) res.json(student);
    else res.status(404).json({message:"Student not found"});
})
app.post("/Students",(req,res)=>{
    const Students=readData();
    const newStudent={
        id:req.body.id,
        name:req.body.name,
        course:req.body.course,
        age:req.body.age,
        grade:req.body.grade
    };

Students.push(newStudent);
writeData(Students);
res.status(201).json(newStudent);
});
app.put("/Students/:id",(req,res)=>{
    const Students=readData();
    const index=Students.findIndex(s=>s.id===parseInt(req.params.id));
    if(index!==-1){
        Students[index]={...Students[index],...req.body};
        writeData(Students);
        res.json(Students[index]);
    }else{
        res.status(404).json({message:"Student not found"});
    }
    });
app.delete("/Students/:id",(req,res)=>{
    let Students=readData();
    const initialLength=Students.length;
    Students=Students.filter(s=>s.id!==parseInt(req.params.id));
    if(Students.length<initialLength){
        writeData(Students);
        res.json({message:"Student deleted"});
        }else{
            res.status(404).json({message:"Student not found"});
    }
});*/
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});
