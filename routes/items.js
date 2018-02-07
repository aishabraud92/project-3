require('dotenv').config();
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Item = require('../models/item');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

var User = require('../models/user');

// POST - create item - take user input for itemName and add current user's id + username to establish ownership
router.post("/dashboard/inventory", function(req, res, next) {
	var data = {
		itemName: req.body.itemName,
		ownerId: req.body.userId,
<<<<<<< HEAD
		isBorrowed: []
=======
		ownerUsername: req.body.username,
		requests: [],
		isBorrowed: false
>>>>>>> 64d4c984a080f4e32cb254ae3c5d4a950e67d6d0
	};
	console.log("data = " + JSON.stringify(data));
	Item.create(data, function(err, item) {
        if (err){
          console.log('DB error', err);
          res.status(500).send({error: true, message: 'Database Error - ' + err.message});
        }
        else {
          res.send({item: item});
        }
    }).then(function() {
    	res.redirect("/dashboard/inventory");
    }).catch(function(status, body){
		res.status(500).send(body);
	});
<<<<<<< HEAD
});

//GET - get item from db and render in inventory
router.get("/dashboard/inventory", function(req, res, next) {
	Item.findAll({
		where: {
			ownerId: req.body.id
		}
	}).then(function(items) {
		console.log(items);
		res.render("/dashboard/inventory", {items: items});
	});
});

module.exports = router;
=======
});

// GET - get all items from items collection where the ownerId matches the current user's _id, render item data for inventory
router.get("/dashboard/inventory", function(req, res, next) {
	Item.find({
		ownerId: req.body.user.id
	}).then(function(items) {
		console.log(items);
		res.render("/dashboard/inventory", {items: items});
	});
});

// GET - render all items besides current user's items on available page
router.get("dashboard/all", function(req, res, next) {
	Item.find({
		ownerId: {$not: req.body.user.id}
	}).then(function(items) {
		console.log(items);
		res.render("dashboard/all", {items: items});
	});
});

// // POST - add other user object/document to requests array in corresponding item object/document
// router.post("/dashboard/all", function(req, res, next) {
// 	User.findOne({
// 		_id: req.body.id
// 	}).then(function(user) {
// 		Item.findOne({
// 			_id: 
// 		})
// 	})
// })

// /* Owner (current user) confirms one request, item is borrowed */
// // POST - add selected user's username from the requests array to borrower.username in item object/document, change isBorrowed boolean value to true
// router.post("dashboard/inventory or requests", function(req, res, next) {
// 	Item.findOne({})
// })
// // DELETE - all requests in the requests array are cleared
// router.delete("dashboard/inventory or requests", function(req, res, next) {
// 	Item.findOneAndRemove({})
// })

// /* Borrower ready to return item to owner */
// // POST - change borrower.isFinished status from false to true
// router.post("dashboard/borrowing", function(req, res, next) {
// 	Item.findOneAndUpdate({})
// })

// /* Owner confirms possession/return of item, item returns to default state */
// // POST - change isBorrowed back to default (false)
// router.post("dashboard/lending", function(req, res, next) {
// 	Item.findOneAndUpdate({})
// })
// // DELETE - delete borrower object
// router.delete("dashboard/lending", function(req, res, next) {
// 	Item.findOneAndRemove({})
// })

// /* Owner decides to take item off of app if in inventory */
// // DELETE - delete item
// router.delete("dashboard/inventory", function(req, res, next) {
// 	Item.findOneAndRemove({})
// })

module.exports = router;
>>>>>>> 64d4c984a080f4e32cb254ae3c5d4a950e67d6d0
