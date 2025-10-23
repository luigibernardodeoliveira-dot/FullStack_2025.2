require("colors");

var http = require("http");
var express = require("express");

var app = express();
app.use(express.static("./public"));

var servidor = http.createServer(app);

servidor.listen(80);

console.log("Servidor iniciado com sucesso!".rainbow);