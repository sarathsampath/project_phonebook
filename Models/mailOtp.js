const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
  Mail:{type:String,required :true},
  Otp: { type:String, required: true },
  
  
});

module.exports = mongoose.model("mailOtp", userSchema);
