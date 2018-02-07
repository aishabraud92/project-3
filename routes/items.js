require('dotenv').config();
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Item = require('../models/item');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

//POST - create item/add item to inventory
router.post("/dashboard/inventory", function(req, res, next) {
	var data = {
		itemName: req.body.itemName,
		ownerId: req.body.userId,
		isBorrowed: []
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
