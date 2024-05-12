const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:3
    },
    email:{
        type:String,
        required:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid email id")
            }
        }
    },
    subject:{
        type:String,
        required:true,
        maxLength:10
    },
    message:{
        type:String,
        required:true,
        maxLength:200
    }
})

const  BookingSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:3        
    },
    email:{
        type:String,
        required:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid email id")
            }
        }
    },
    time:{
        type:String,
        required:true
    },
    people:{
        type:Number,
        required:true,
        max:10       
    },
    message:{
        type:String,
        required:true,
        maxLength:200
    },
    data:{
        type:Date,
        default:Date.now
    }
})

const User = mongoose.model("User", userSchema);
const Booking = mongoose.model("Booking", BookingSchema);

module.exports = User;
module.exports = Booking;