const Data = require("../Data/constants");
const phoneBookHelper = require("../Utils/fileHelper");
const phoneBookResponseHelper = require("../Utils/responseHelper");
var userModel = require("../Models/Users");
var shortid = require("shortid");
const sendMailHelper=require("../Utils/sendMail")
var mailOtp=require("../Models/mailOtp")
const dotenv = require("dotenv");
const Mail = require("nodemailer/lib/mailer");
dotenv.config();
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")
async function displayContact(number) {
  try {
    console.log("service :displayContact:start");
    console.log(number);
    var data = await userModel.find({ "mobilenumbers.number": number });
    console.log(data);
    if(data!="")
    {
    var status = phoneBookResponseHelper.responseHelperSuccess(true,data,200);
    return status;
    }
    else{
      var status = phoneBookResponseHelper.responseHelperFailure(false,"No such Number!",400);
      return status;
    }
  } catch (err) {
    console.log(err);
  }
}
async function displayAllContact() {
  try {
    console.log("service :displayAllContact:start");
    var data = await userModel.find();
    var status = phoneBookResponseHelper.responseHelperSuccess(true,data,200);
    return status;
  
  } catch (err) {
    console.log(err);
  }
}
async function addContact(name,mail,password,mobilenumbers, Address) {
  try {
    const secretKey="sarath"
    console.log("service :AddContact:start");
    var Maildata = await userModel.find({
      mail: mail,
    });
    if(Maildata!="")
    {
      var status = phoneBookResponseHelper.responseHelperFailure(false,"MailId Already Registered", 404);
    return status;
    }
  
    let value1=""
    console.log("service",Maildata)
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(password, salt);
    if(Maildata=="")
    {
    var date = new Date();
    const register = new userModel({
      ids: shortid.generate(),
      name: name,
      mail:mail,
      password:hash,
      AddedDate: date,
      Address: Address,
      mobilenumbers: mobilenumbers,
      isActive:false,
    });
    console.log("asd",value1)
  const ss=await jwt.sign({
    id:register.ids
  },secretKey,{expiresIn:36000}
)
console.log(ss)
   console.log(register)
    
  var data1 = await userModel.find({
     "mobilenumbers.number": mobilenumbers[0].number,
    });
   
    if (data1 !="") {
      var status = phoneBookResponseHelper.responseHelperFailure(false,"Mobile Number Already Registered", 404);
    return status;
    } else {
    const savedUser = await register.save();
      console.log("service :AddContact:status");
      console.log("service :AddContact:end");
      var status = phoneBookResponseHelper.responseHelperSuccess(
        true,
        "Details Recorded",
        200   
      );
      return status;
    }

  }
  } catch (err) {
    console.log(err);
    var status = phoneBookResponseHelper.responseHelperFailure(false, err, 404);
    return status;
  }
}

async function deleteContact(id,number) {
  try {
    console.log("service :deleteContact:start");
    console.log(typeof id,typeof number)
    var check = await userModel.find({
      "mobilenumbers.number": number,ids:id
     });
    console.log(check)
    if(check!="")
    {
   var data = await userModel.deleteOne({ ids: id});
    var status = phoneBookResponseHelper.responseHelperSuccess(true,"Data Deleted",200);
      return status;
    }
    else{
      var status = phoneBookResponseHelper.responseHelperFailure(false,"Number Doesnot Match!!!", 404);
      return status;
    }
  } catch (err) {
    console.log(err);
    var status = phoneBookResponseHelper.responseHelperFailure(false, err, 404);
    return status;
  }
}
async function updateContact(id, Address) {
  try {
    console.log("service :updateContact:start");
    const d = await userModel.findOne({
      ids: id,
    });
    if (!d) {
      var status = phoneBookResponseHelper.responseHelperFailure(false,"Cannot Update Address", 404);
      return status;
    } 
    console.log(Address);
    var data = await userModel.updateOne({ ids: id }, { Address: Address });
    var status = phoneBookResponseHelper.responseHelperSuccess(true,"Address Updated",200);
      return status;
  
  } catch (err) {
    console.log(err);
    var status = phoneBookResponseHelper.responseHelperFailure(false, err, 404);
    return status;
  }
}

async function validateMail(mail)
{try{
  console.log("service :validatemail:start");
  var dataVerified=await userModel.find({mail:mail,isActive:true})
  if(dataVerified!="")
  {
    var status1 =await phoneBookResponseHelper.responseHelperSuccess(true,"Mail already verified",200);
    return status1 
  }
  var dataMail=await userModel.find({mail:mail});
  console.log(dataMail)
  if(dataMail=="")
  {
    var status1 =await phoneBookResponseHelper.responseHelperSuccess(false,"Need signup",400);
    return status1 
  }
  else
  {
  var otp = Math.floor(1000 + Math.random() * 9000);
  var status=await sendMailHelper.sendMail(otp,mail);
  console.log(status,"status")
  var data1=await mailOtp.find({Mail:mail})

  if(data1!="")
  {
    await mailOtp.updateOne({Mail:mail},{Otp:otp});
    var status1 =await phoneBookResponseHelper.responseHelperSuccess(true,"otp has been sent",200);
    return status1
  }
  else{
  if((status==true))
  {
    var status1 =await phoneBookResponseHelper.responseHelperSuccess(true,"otp has been sent",200);
    var data=new mailOtp({
      Mail:mail,
      Otp:otp
    });
    const savedUser = await data.save();

    console.log("true")
    return status1;
  }
else{
  var status1 =await phoneBookResponseHelper.responseHelperFailure(false,"error", 404);
  console.log("false")
    return status1;
}}
}}
catch (err) {
  console.log(err);
  var status = phoneBookResponseHelper.responseHelperFailure(false, err, 404);
  return status;
}
}
async function verifyMail(mail,otp)
{
  try
  {console.log(mail,otp   )
  console.log("service :verifyMail:start");
  var dataVerified=await userModel.find({mail:mail,isActive:true})
  if(dataVerified!="")
  {
    var status1 =await phoneBookResponseHelper.responseHelperSuccess(true,"Mail already verified",200);
    return status1 
  }
  var dataMail=await userModel.find({mail:mail});
  if(dataMail=="")
  {
    var status1 =await phoneBookResponseHelper.responseHelperSuccess(false,"Need signup",400);
    return status1 
  }
  let data=await mailOtp.find({Mail:mail,Otp:otp});
  if(data!="")
  {
    var status1=await userModel.updateOne({mail:mail},{isActive:true});
    console.log(status1)
    var ss=await mailOtp.deleteOne({Mail:mail})
    var status =await phoneBookResponseHelper.responseHelperSuccess(true,"Mail Verified",200);
    return status;

  }
  else
  { 
    var status =await phoneBookResponseHelper.responseHelperFailure(false,"Invalid Mail or OTP",400);
    return status;

  }
}
catch (err) {
  console.log(err);
  var status = phoneBookResponseHelper.responseHelperFailure(false, err, 404);
  return status;
}
}

async function uploadFile(avatar)

{
  
  return new Promise((resolve,reject)=>
  {var id=123;
    var ss={
      name:id+".pdf",
      data:avatar.data
    }
  console.log("service start")
 var ss=avatar.mv("C:/Users/sarat/OneDrive/Desktop/phonebook/"+ss.name,async function(err) {
    if (err)
    {
      var status=await phoneBookResponseHelper.responseHelperFailure(false,"File not Uploaded",400);
      console.log("service end")
      resolve(status);
    }
    else{
      var status=await phoneBookResponseHelper.responseHelperSuccess(true,"file uploaded",200);
      console.log(":file uploaded",status)
      console.log("service end")
      resolve( status);
    }
  
});}
)
}





module.exports = {uploadFile,validateMail,verifyMail,displayContact, displayAllContact,deleteContact, updateContact, addContact };
