'use strict';

const vehicles = require('../controllers/vehicles.ctrl');

module.exports = function(router) {
	// Get the version of the application from the package.json file
	router.get('/version', function (req, res) {
        let currentVersion = {"version":require('../../package.json').version};
		console.log(currentVersion);
    	res.json(currentVersion);
    });

    // Get all vehicles
    router.get('/vehicle', function (req, res) {
		vehicles.getAll().then(function(data){
			res.json(data);
    	});
    });

    // Delete one vehicle
	router.delete('/vehicle/:id', function (req, res) {
		vehicles.remove(req.params.id).then(function(data){
			res.json(data);
    	});
    });

    // Add a vehicle
	router.post('/vehicle', function (req, res) {
		vehicles.add(req.body).then(function(data){
			res.json(data);
    	});
    });

    // Update a vehicle
    router.put('/vehicle', function (req, res) {
        vehicles.update(req.body).then(function(data){
            res.json(data);
        });
    });
};