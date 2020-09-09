var userModel = require("../Models/Users");
const phoneBookResponseHelper = require("../Utils/responseHelper");

async function Authentication(mail,password)
{
    var data=await userModel.find({mail:mail,password:password,isActive:true})
    console.log("value",data)
    if(data=="")
    {   
        var statuses = phoneBookResponseHelper.responseHelperFailure(false,"Invalid Mail or password", 404);
        console.log(statuses)
        return statuses;
    }
    else{
       
        var statuses = phoneBookResponseHelper.responseHelperSuccess(true,data[0].ids,200);
        console.log(statuses)
        return statuses;
    }
}

module.exports={Authentication}