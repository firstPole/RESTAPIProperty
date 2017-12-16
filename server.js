
var express = require('express'),
	app = express(),
	  port = process.env.PORT || 3000,
	  mongoose = require('mongoose'),
	  Property = require('./api/models/toiletListModel'), //created model loading here
	  bodyParser = require('body-parser');

// mongoose instance connection url connection
 mongoose.Promise = global.Promise;
 mongoose.createConnection('mongodb://54.163.164.210:27017/Property');


 app.use(bodyParser.urlencoded({ extended: true }));
 app.use(bodyParser.json());

 app.listen(port, function() {
  console.log("Server is running at : http://localhost:3000");
 });
