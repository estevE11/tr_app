const express = require("express");
const app = express();
const path = require("path");

app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
	console.log("Got a request :D");
	res.sendFile("index.html", {root: path.join(__dirname, "./public")});
});

app.listen(8080, () => {
	console.log("Listening to 8080");
});