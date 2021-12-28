const express = require('express');
const app = express();
const mongodb = require("./mongodb/Mongodb.connect");
const toDoRoutes = require("./routes/todo.routes");
 
mongodb.connect();
 
app.use(express.json());
app.use("/todos",toDoRoutes);
app.use((error,req,res,next)=>{
   res.status(500).json({message:error.message});
});
 
app.get("/",(req,res)=>{
   res.json("Hello World");
});

app.listen(4000,()=>{
   console.log("Server is listening on port 4000");
})

 
module.exports =app;