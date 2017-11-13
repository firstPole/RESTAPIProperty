'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var PropertySchema = new Schema({
	  property_name: {
		      type: String,
		      
		    },

	property_type:{

		},
	  Created_date: {
		      type: Date,
		      default: Date.now
		    },
	  istoilet: {
		      type: [{
			            type: Boolean
			           
			          }]
		    },
	address:{
		type: String
	}
});

module.exports = mongoose.model('Property', PropertySchema);
