var express=require('express');
var app=express();
app.use("/", express.static(__dirname + "/src"));
app.get('/',function(request,response){
  response.sendFile(__dirname+'/index.html');
});

var port = process.env.PORT || 8080;

var server=app.listen(port,function(req,res){
  console.log(__dirname);
    console.log("Catch the action at http://localhost:"+port);
});
