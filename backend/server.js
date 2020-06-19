const express =require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require('dotenv').config();

const app=express();
const port= process.env.PORT||5000;

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://vidit:test123@cluster0-ti0bq.mongodb.net/Testing", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.set('useCreateIndex', true);

const connection=mongoose.connection;

connection.once('open',()=>{
    console.log("Connection established");
    
});

const usersRouter= require("./routes/users");

app.use('/users',usersRouter);



app.listen(port,()=>{
    console.log("Server is running at port: 5000");
    
});