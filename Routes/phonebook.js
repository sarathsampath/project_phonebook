const phoneBookController = require("../Controllers/Phonebook");
const express = require("express");
const app = express();

const Data = require("../Data/constants");
const phoneBookResponseHelper = require("../Utils/responseHelper");
async function displayContact(req, res) {
  console.log("Route : displayContact : start");
  var number = req.params.number;
  var status = await phoneBookController.displayContact(number);
  console.log("Routes : displayContact : Status : " + status);
  res.send(status);
  console.log("Routes : displayContact : end");
}
async function displayAllContact(req, res) {
  console.log("Route : displayAllContact : start");
  var status = await phoneBookController.displayAllContact();
  console.log("Routes : displayContact : Status : " + status);
  res.send(status);
  console.log("Routes : displayContact : end");
}
async function addContact(req, res) {
  console.log("Route : addContact : start");
  var name = req.body.name;
  var mail=req.body.mail;
  var password=req.body.password;
  var mobilenumbers = req.body.mobilenumbers;
  var Address = req.body.Address;
  if (mobilenumbers == undefined || mail==undefined || password==undefined || name == undefined || Address == undefined) {
    var status = phoneBookResponseHelper.responseHelperFailure(
      false,
      "invalid key value",
      404
    );
    res.send(status);
  } else {
    let status = await phoneBookController.addContact(
      name,
      mail,password,
      mobilenumbers,
      Address
    );
    console.log("Routes : addContact : Status : " + status);
    res.send(status);

    console.log("Routes : addContact : end");
  }
}

async function deleteContact(req, res) {
  console.log("Route : deleteContact : start");
  var id = req.params.id;
  var number=req.params.number;
  let status = await phoneBookController.deleteContact(id,number);
  console.log("Routes : deleteContact : Status : " + status);
  res.send(status);
  console.log("Routes : deleteContact : end");
}

async function updateContact(req, res) {
  console.log("Route : updateContactupdateContact : start");
  var id = req.params.id;
  var Address = req.body.Address;
  let status = await phoneBookController.updateContact(id, Address);
  console.log("Routes : updateContact : Status : " + status);
  res.send(status);
  console.log("Routes : updateContact : end");
}

async function validateMail(req,res)
{
  console.log("routes:validatemail :start");
  var mail=req.body.mail;
  let status= await phoneBookController.validateMail(mail);
  console.log("routes",status)
  res.send( status)
}
async function verifyMail(req,res)
{
  console.log("routes:verifyMail :start");
  console.log(req.body)
  var mail=req.body.mail;
  var otp=req.body.otp
  let status= await phoneBookController.verifyMail(mail,otp);
  console.log("routes",status)
  res.send( status)
}
async function uploadFile(req,res)
{
  console.log("route start")
  const avatar=req.files.avatar;
  console.log(avatar);
  let status=await phoneBookController.uploadFile(avatar)
  console.log("route end",status)
  res.send( status);
  
}

module.exports = {uploadFile,verifyMail,validateMail, displayContact, displayAllContact,deleteContact, updateContact, addContact };
