const express = require('express')
const app = express()
const port = 3000

app.get('/',(req,res)=>{
    res.send("Hello");
    // res.end();
})


app.listen(port,()=>console.log("Server up at ",port))