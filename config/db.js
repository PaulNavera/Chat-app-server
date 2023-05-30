const mongoose = require("mongoose");

const connectDB =  () => {

mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    
    });

const db = mongoose.connection;

db.on("error",console.error.bind(console,"Error connecting to the database!"));
db.once("open",()=>console.log("MongoDB connection is successful!"));
 
};

module.exports = connectDB;