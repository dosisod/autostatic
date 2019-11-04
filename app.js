//app.js simpliy interfaces with autostatic, sending it to be parsed.

const express=require("express");
var app=express();

const autostatic=require(".");
const auto=new autostatic();

const PORT=1717;
const ADDR="localhost";

//send all requests to auto to be parsed
app.get("*", (req, res)=> {
	res.json(auto.parse(req));
})

//start listening
app.listen(PORT, ()=> {
	console.log("autostatic -> on "+ADDR+":"+PORT+" (github.com/dosisod/autostatic)");
});
