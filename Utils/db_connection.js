var mongoose=require("mongoose");
const dotenv=require("dotenv");
dotenv.config();

 function getDbConnection()
{

mongoose.connect(process.env.DB_CONNECT,{ useNewUrlParser: true,useUnifiedTopology: true })
.then(()=>{console.log("connected");
})
.catch((err)=>{
    console.log("dafs");
    console.log(err);
console.log("dafs");})
}

module.exports={
    getDbConnection
}