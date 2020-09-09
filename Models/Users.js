const mongoose = require("mongoose");

const ss = new mongoose.Schema({
  contactType: { type: String, required: true },
  networkType: {
    type: String,
    required: true,
  },
  number: { type: String, required: true },
});
const address = new mongoose.Schema({
  street: { type: String, required: true },
  pincode: { type: String, required: true },
});
const userSchema = new mongoose.Schema({
  ids: { type: String, required: true },
  name: { type: String, required: true },
  mail:{type:String,required :true},
  password:{type:String,required:true},
  AddedDate: { type: Date, required: true },
  Address: address,
  mobilenumbers: [ss],
  isActive: {
    type: Boolean,
  },
});

module.exports = mongoose.model("users", userSchema);
