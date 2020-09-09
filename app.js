
const express=require("express");
const app=express();
const cors=require("cors")

app.use(cors())
const dotenv=require("dotenv");
const Auth=require("./Utils/Auth");
const bodyparser=require("body-Parser");
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true}));
dotenv.config();
app.use(express.json());
var dbs=require("./Utils/db_connection");
dbs.getDbConnection();

const phoneBookRoute=require("./Routes/Phonebook")

async function check(req,res,next)
{
var data=await Auth.Authentication(req.body.mail,req.body.password);

if(data==false)

{
       res.send(data)
    
}
else{
   // console.log("time")
    res.send(data)
}
}
//display all users 
app.post("/users",check,function(req,res,next)
{   
    
})
app.post("/phoneBook/validateMail",phoneBookRoute.validateMail)

app.post("/phoneBook/verifyMail",phoneBookRoute.verifyMail)


app.get("/phoneBook/:number",phoneBookRoute.displayContact);
app.post("/phoneBook",phoneBookRoute.addContact);
app.put("/phoneBook/:id",phoneBookRoute.updateContact);
app.delete("/phoneBook/:id/:number",phoneBookRoute.deleteContact);


app.get("/phoneBook/:name/:password/",check,(req,res,next)=>{
        phoneBookRoute.displayAllContact(req,res)});


app.listen(4000,console.log("server running"));
