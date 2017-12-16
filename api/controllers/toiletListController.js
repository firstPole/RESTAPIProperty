'use strict'
var mongoose= require('mongoose'),
	  Property = mongoose.model('Property');

exports.list_all_property = function(req, res) {
	  Property.find({}, function(err, property) {
		      if (err)
			        res.send(err);
		      res.json(property);
		    });
};




exports.create_a_property = function(req, res) {
	  var new_property = new Property(req.body);
		res.send("data :" + req);
	  new_property.save(function(err, property) {
		      if (err)
			        res.send(err);
		      res.json(property);
		    });
};
