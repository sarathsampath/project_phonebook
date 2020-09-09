function responseHelperSuccess(success,message,errorCode)
{
	console.log("helper: response success :start");
	var res={
		"isSuccess":success,
		"message":message,
		"errorCode":errorCode,
		
	};
	console.log("helper: response success :end"+res);
	return res;
}
function responseHelperFailure(success,message,errorCode)
{
	console.log("helper: response failure :start");
	var res={
		"isSuccess":success,
		"message":message,
		"errorCode":errorCode
		
	};
	console.log("helper: response success :end"+res);
	return res;
}


module.exports={responseHelperSuccess,responseHelperFailure};