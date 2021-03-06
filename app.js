const express = require('express');
const cors=require('cors');//cross origin resource sharing.
const app = express();
const userRotuer=require('./routes/users.route')

app.use(express.json()); //middleware for post method.
app.use(cors());
app.use("/users",userRotuer);

// home route
app.get('/',(req, res)=>{
    res.sendFile(__dirname+"/views/index.html");
})

// route not found
app.use((req,res,next)=>{
    res.status(404).json({message:"route not found/bad request"})
})

// server error

app.use((err,req,res,next)=>{
    res.status(500).json({message:"something broke"})
})


module.exports= app;