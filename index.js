require('dotenv').config();

const express = require('express');
const app = express();
const connectDB = require('./config/db')
const http = require('http')
const cors = require('cors')

const mongoose = require('mongoose');

const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const messageRoutes = require("./routes/messageRoutes");

app.use(cors())
app.use(express.json({limit: '25mb'}));
app.use(express.urlencoded({extended:true},{limit: '25mb'}));


connectDB();


app.use("/api/user",userRoutes);
app.use("/api/chat",chatRoutes);
app.use("/api/message",messageRoutes);



app.listen(process.env.PORT,()=>{
    console.log(`Server Started On Port ${process.env.PORT}`);
})


