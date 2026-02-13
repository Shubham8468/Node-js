import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
const app= express();
dotenv.config();
app.set('view engine',"ejs")
const PORT=process.env.PORT || 7000;
const MONGOURL=process.env.MONGO_URL;

mongoose.connect(MONGOURL).then(()=>{
    console.log("Database is connect successfully ");

    app.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT}`)
    });
}).catch((err)=>{
    console.log(err)
})


const userSchema=new mongoose.Schema({
    name:String,
    age:Number,
    email:String
});

const userModel=mongoose.model("users",userSchema);
app.get("/getUsers",async (req,resp)=>{
    const userData=await userModel.find();
    resp.json(userData);
})
app.get('/',async(req,resp)=>{
    const userData=await userModel.find();
    console.log(userData)

    resp.render('DisplayDBData',{userData});
})
