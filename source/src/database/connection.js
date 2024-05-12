const mongoose = require("mongoose");

//Creating database
mongoose.connect("mongodb://localhost:27017/resturantbooking",{
}).then(()=>{
    console.log("Connection succesfull");
}).catch((error)=>{
    console.log(error);
})