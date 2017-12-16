
var express = require('express'),
	app = express(),
	  port = process.env.PORT || 3000,
	  mongoose = require('mongoose'),
	  Property = require('./api/models/toiletListModel'), //created model loading here
	  bodyParser = require('body-parser');

// mongoose instance connection url connection
 mongoose.Promise = global.Promise;
 mongoose.connect('mongodb://54.210.13.122:27017/Property');


 app.use(bodyParser.urlencoded({ extended: true }));
 app.use(bodyParser.json());
