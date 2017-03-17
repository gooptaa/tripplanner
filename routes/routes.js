const router = require('express').Router()
const db = require('../models/models.js').db;
const Place = require('../models/models.js').Place;
const Hotel = require('../models/models.js').Hotel;
const Restaurant = require('../models/models.js').Restaurant;
const Activity = require('../models/models.js').Activity;
const Promise = require('bluebird');


router.get('/', function(req, res, next){


	const Hotels = Hotel.findAll()
	.then(function(hotelResult) {
		return hotelResult;
	})
	.catch(next)

	const Activities = Activity.findAll()
	.then(function(activityResult) {
		return activityResult;
	})
	.catch(next)

	const Restaurants = Restaurant.findAll()
	.then(function(restaurantResult) {
		return restaurantResult;
	})
	.catch(next)

	Promise.all([Hotels, Activities, Restaurants ])
	.then((results) => {
		res.render('index', {results});
	})
	.catch(function (){
		throw new Error('results did not come back!');
	})
})

router.use(function( req, res, next ) {
	res.status(404);
	res.render('error')
})



module.exports = router;
