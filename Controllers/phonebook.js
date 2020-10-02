const phoneBookHelper = require("../Utils/regexHelper");
const phoneBookService = require("../Services/phonebook");
const phoneBookResponseHelper = require("../Utils/responseHelper");
const emailValidator=require("../Utils/emailValidator")
async function displayContact(number) {
  try {
    console.log("Controllers : displayContact : start");
    var status = await phoneBookService.displayContact(number);
    console.log("Controllers : displayContact : Status : " + status);
    
    console.log("Controllers : displayContact : end");
    return status;
  } catch (err) {
    var status = phoneBookResponseHelper.responseHelperFailure(false, err, 404);
    return status;
  }
}
async function displayAllContact() {
  try {
    console.log("Controllers : displayContact : start");
    var status = await phoneBookService.displayAllContact();
    console.log("Controllers : displayContact : Status : " + status);
   
    console.log("Controllers : displayContact : end");
    return status;
  } catch (err) {
    var status = phoneBookResponseHelper.responseHelperFailure(false, err, 404);
    return status;
  }
}

async function addContact(name,mail,password ,mobilenumbers, Address) {
  try {
    console.log("Controllers : addContact : start");
    var validator=emailValidator.emailValidation(mail);
    if(validator==false)
    {
      var statuses = phoneBookResponseHelper.responseHelperFailure(false,"Invalid Email", 404);
      return statuses;
    }
    let status = await phoneBookService.addContact(
      name,
      mail,
      password,
      mobilenumbers,
      Address
    );
    console.log("Controllers : addContact : Status : " + status);
    

    console.log("Controllers : addContact : end");
    return status;
  } catch (err) {
    console.log(err);
    var status = phoneBookResponseHelper.responseHelperFailure(
      false,
      "invalid input",
      404
    );
    return status;
  }
}

async function deleteContact(id,number) {
  try {
    console.log("Controllers : deleteContact : start");

    let status = await phoneBookService.deleteContact(id,number);
    console.log("Controllers : deleteContact : Status : " + status);
    console.log("Controllers : deleteContact : end");
    return status;

    
  } catch (err) {
    var status = phoneBookResponseHelper.responseHelperFailure(false, err, 404);
    return status;
  }
}

async function updateContact(id, Address) {
  try {
    console.log("Controllers : updateContact : start");

    let status = await phoneBookService.updateContact(id, Address);
    console.log("Controllers : updateContact : Status : " + status);

    return status;

    console.log("Controllers : updateContact : end");
  } catch (err) {
    var status = phoneBookResponseHelper.responseHelperFailure(false, err, 404);
    return status;
  }
}
async function validateMail(mail)
{
console.log("controllers:validate mail:start")
var status=await phoneBookService.validateMail(mail);
console.log("controller",status)
return status;
}

async function verifyMail(mail,otp)
{
console.log("controllers:verifyMail:start")
var status=await phoneBookService.verifyMail(mail,otp);
console.log("controller",status)
return status;
}

async function uploadFile(avatar)
{
console.log("controllers start")
if( avatar.size>10240000)
{
  
  var s=phoneBookResponseHelper.responseHelperFailure(false,"file size is large",400)
  return s;
}
if(avatar.mimetype!="application/pdf")
{
  var s=phoneBookResponseHelper.responseHelperFailure(false,"pdf only allowed",400)
  return s;
}
var status=await phoneBookService.uploadFile(avatar);
console.log("controller end",status)
return status;

}
module.exports = {uploadFile,verifyMail, validateMail, displayContact,displayAllContact ,deleteContact, updateContact, addContact };
