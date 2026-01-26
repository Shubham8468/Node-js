
require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
  res.end();
})
app.get("/home",(req,res)=>{
 res.send("<h1>This is home page</h1>")
 res.end();
})
app.get('/login',(req,res)=>{
    res.send("<h1>this is login Page</h1>")

})
//change the name port..= process.env.PORT
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})