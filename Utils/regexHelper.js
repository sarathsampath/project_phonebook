/*var regex=require("regex");

const phoneBookResponseHelper=require("../Utils/responseHelper");
function idValidation (id)
{try{
	console.log("helpers : idValidation : start");
	regex=/^[0-9]{1,}$/;
	var status=regex.test(id);
	console.log("helpers : idValidation : status"+status);
	console.log("helpers : idValidation : end");
	if(status==false)
	{var status=phoneBookResponseHelper.responseHelperFailure(false,"invalid id",404);
		console.log("helpers : idValidation :Status");
		console.log("helpers : idValidation :end");
		return status;
		
	}
	return status;
	}
	catch(err)
	{
		var status=phoneBookResponseHelper.responseHelperFailure(false,err,404);
		console.log("helpers : idValidation :Status");
		console.log("helpers : idValidation :end");
		return status;
	}
	

}	


function nameValidation (name)
{try{
	
	console.log("helpers : nameValidation : start");
	regex=/^([a-z]|[A-Z]){4,}$/;
	var status=regex.test(name);
	console.log("helpers : nameValidation : status"+status);
	console.log("helpers : nameValidation : end");
	if(status==false)
	{
		var status=phoneBookResponseHelper.responseHelperFailure(false,"invalid name",404);
		console.log("helpers : nameValidation :Status");
		console.log("helpers : nameValidation :end");
	}
	return status;
	}
	catch(err)
	{
		var status=phoneBookResponseHelper.responseHelperFailure(false,err,404);
		console.log("helpers : nameValidation :Status");
		console.log("helpers : nameValidation :end");
		return status;
	}
	
}	


function mobileNumberValidation (number)
{try
	{
		console.log("helpers : mobileNumberValidation : start");
		regex=/^[0-9]{10}$/;
		var status=regex.test(number);
		console.log("helpers : mobileNumberValidation : status"+status);
		
		if(status==false)
		{
		var status=phoneBookResponseHelper.responseHelperFailure(false,"invalid mobile number",404);
		console.log("helpers : numberValidation :Status");
		console.log("helpers : numberValidation :end");
		return status;
		}
		return status;
		}
	catch(err)
	{	console.log(err);
		var status=phoneBookResponseHelper.responseHelperFailure(false,err,404);
		console.log("helpers : numberValidation :Status");
		console.log("helpers : numberValidation :end");
		return status;
	}
	console.log("helpers : mobileNumberValidation : end");
	
}	


function mobileTypeValidation (type)
{
	try{
		console.log("helpers : mobileTypeValidation : start");
		const myEnum=new Enum(["office","home","work"]);
		var status=false;
		for(var i of myEnum )
		{
			if(i.key==type)
			{
			status=true;
			console.log("helpers : mobileTypeValidation : status"+status+type);
			console.log("helpers : mobileTypeValidation : end");
			return status;
			}
				
		}
		
		if(status==false)
		{	console.log("sgsd");
		var status=phoneBookResponseHelper.responseHelperFailure(false,"invalid type",404);
		console.log("helpers : mobileTypeValidation : status"+status);
		console.log("helpers : mobileTypeValidation : end");
		return status;
		}
		
	}
	catch(err)
	{
		var status=phoneBookResponseHelper.responseHelperFailure(false,err,404);
		console.log("helpers : mobileTypeValidation : status"+status);
		console.log("helpers : mobileTypeValidation : end");
		return status;
	}
	
}	

module.exports={ idValidation,nameValidation,mobileNumberValidation,mobileTypeValidation
};*/