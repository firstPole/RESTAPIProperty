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
	address1:{
		type: String
	},
	address2:{
		type: String
	},
	city:{
		type: String
	},
	state:{
		type: String
	},
	country:{
		type: String
	},
	postalCode:{
		type: String
	}
});

module.exports = mongoose.model('Property', PropertySchema);
