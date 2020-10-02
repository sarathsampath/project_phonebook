const express=require("express");
const app=express();
const cors=require("cors");
app.use(cors())
const fileupload = require('express-fileupload')
app.use(fileupload())
const bodyparser=require("body-Parser");
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true}));
app.use(express.json());
const Auth=require("./Utils/Auth");
var dbs=require("./Utils/db_connection");   
const phoneBookRoute=require("./Routes/Phonebook")



app.post("/uploadfile",phoneBookRoute.uploadFile)



app.get('/download', function(req, res){
        console.log("start:downloadFIle")
        const file = "C:/Users/sarat/OneDrive/Desktop/phonebook/ss.pdf";
        res.sendFile(file); 
      });
dbs.getDbConnection();


async function check(req,res,next)
{
var data=await Auth.Authentication(req.body.mail,req.body.password);

if(data==false)

{
       res.send(data)
    
}
else{
    res.send(data)
}
}

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
