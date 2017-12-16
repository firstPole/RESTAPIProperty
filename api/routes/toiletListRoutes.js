'use strict';
module.exports = function(app) {
	  var todoList = require('../controllers/todoListController');

	  // todoList Routes
	   app.route('/property')
	       .get(todoList.list_all_property)
	           .post(todoList.create_a_property);
	                         };
	
