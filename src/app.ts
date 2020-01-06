import express from "express";
const app=express();

import { autostatic } from ".";
const cache=new autostatic();

const PORT=1717;
const ADDR="localhost";

app.get("*", (req, res)=> {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.json(cache.parse(req));
})

app.listen(PORT, ()=> {
	console.log("autostatic -> on "+ADDR+":"+PORT+" (github.com/dosisod/autostatic)");
});
