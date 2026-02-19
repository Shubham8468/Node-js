import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv';

const app= express();
dotenv.config();
const PORT=process.env.PORT || 7000;
const MONGODBURL=process.env.MONGO_URL;

mongoose.connect(MONGODBURL).then(()=>{
    console.log("MOngooDB Connected ");
    app.listen(PORT,()=>{
     console.log(`Server is running on ${PORT}`);
    });
}).catch((error)=>{
    console.log(error);
})

const schoolSchema = new mongoose.Schema({
    name:String,
    age:Number,
    email:String,
    rollNo:Number
});

const studentsModel= mongoose.model('boye',schoolSchema,'boyes');
app.get('/getUsers', async(req,resp)=>{
    const student= await studentsModel.find();
    console.log(student);
    resp.json(student);
})