const express = require("express");
var app = express();
var cors = require("cors");
var http = require("http").Server(app);
//body parser
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(cors());
//import routes
var routes = require("./routes")(app);
//set port
const port = process.env.PORT || 3000;

//start server  on port 2030 and show details
app.listen(3000, "127.0.0.1", function () {
  var d = new Date();
  var h = d.getHours();
  var m = d.getMinutes();
  console.log("server started on port: " + port);
  console.log("H: " + h + " " + "M: " + m);
});

//default route to public folder
app.use(express.static(__dirname + "/www"));
