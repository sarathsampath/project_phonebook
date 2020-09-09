var validator = require("email-validator");

function emailValidation(email)
{
console.log("utils:mail validation:start")    
const result=validator.validate(email);
return result;
}
module.exports={emailValidation}