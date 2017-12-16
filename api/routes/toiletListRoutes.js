'use strict';
module.exports = function(app) {
	  var toiletList = require('../controllers/toiletListController');

	  // todoList Routes
	   app.route('/property')
	       .get(toiletList.list_all_property)
	           .post(toiletList.create_a_property);
	                         };
