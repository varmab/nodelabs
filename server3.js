var express=require("express");
var app=express();

var articles=require('./routes/articles')

//convert request object to JS obect when data
// comes via request body in case of POST or PUT
var bodyParser=require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use("/api/articles",articles);

app.listen(5000,()=>{
    console.log("Server 3 is started")
})
