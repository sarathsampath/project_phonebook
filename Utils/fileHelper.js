
const fs = require("fs"); 
const express=require("express");
const app=express();
const bodyparser=require("body-Parser");
app.use(bodyparser.json()); 
app.use(bodyparser.urlencoded({extended:false}));
const phoneBookResponseHelper=require("../Utils/responseHelper");
const phoneBookServerHelper=require("../Utils/responseHelper");

function fileRead()
{
	try
	{
	
		console.log("Utils :Readfile :start");
		if(fs.existsSync("./Utils/sarath.json"))
		{
			data=fs.readFileSync("./Utils/sarath.json",{encoding:"utf8"});
					
					data=JSON.parse(data);
					var status = JSON.stringify(data);
					console.log("Utils:readFile:status"+status);
					console.log("Utils:Readfile :end");
					return status;
		}
	else{
		throw new Error("Readfile error");
		}
		
	}
	catch(err)
	{	var status=phoneBookResponseHelper.responseHelperFailure(condition,err,404);
		console.log("service :Readfile:Status");
		console.log("service :Readfile:end");
		return status;
	}
}

function fileWrite(data)
{
	try
	{
		console.log("Utils :Writefile:start");
		var condition=false;
		if(fs.existsSync("./Utils/sarath.json"))
		{	condition=true;
			fs.writeFileSync("./Utils/sarath.json",JSON.stringify(data),{spaces:2});
			var data = JSON.stringify(data);
			var status=phoneBookResponseHelper.responseHelperSuccess(condition,"File write done",200,data);
			console.log("Utils :fileWrite:Status"+status);
			console.log("Utils :fileWrite:end");
			return status;
		}
		
			
	}
	catch(err)
	{console.log("error"+err);
		var status=phoneBookResponseHelper.responseHelperFailure(false,err,404);
		console.log("Utils :Writefile:Status");
		console.log("Utils :Writefile:end");
		return status;
	}
}


module.exports={ fileRead,fileWrite};