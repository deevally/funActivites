var express = require("express");
var request = require("request");
var Bodyparser = require("body-parser");
var app = express();

app.set("view engine", "ejs");

app.use(Bodyparser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    res.render("search");
});
app.use(express.static("public"));

app.get("/display", function(req, res){
 
    var url = "http://boredapi.com/api/activity/?";


request(url, function(error, response , body){
    if(!error && response.statusCode ==200){

        var act = JSON.parse(body);
        
        res.render("display", {act : act});
    }
});
});


app.listen(3000 ,function(){
    console.log("server started");
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server started");
});