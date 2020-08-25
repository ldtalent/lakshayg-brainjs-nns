const mongoose = require("mongoose");

//add your mongoDB URI here
const URI = "URI"
const connectDB = async () => {
    try{
    await mongoose.connect(URI,{useUnifiedTopology: true, useNewUrlParser:true})
   console.log("MongoDB Connected")
    }
     catch(err){
       console.log("MongoDB Authentication failed ")}
    

}


module.exports = connectDB;
