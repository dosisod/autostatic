import express from "express";
const app=express();

import autostatic from "./autostatic";
const cache=new autostatic();

const PORT=1717;
const ADDR="localhost";

app.get("*", (req, res)=> {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.json(cache.parse(req));
})

app.listen(PORT, ()=> {
	console.log("autostatic");
	console.log(`└─ http://${ ADDR }:${ PORT }`);
});
