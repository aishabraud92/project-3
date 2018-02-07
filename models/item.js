var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = require('./user.js');
var userSchema = mongoose.model('User').Schema;

var itemSchema = new Schema({
	itemName: {
		type: String,
		required: true,
		minlength: 1,
		maxlength: 99
	},
	ownerId: {
		type: Schema.Types.ObjectId,
		required: true,
		ref: 'User'
	},
	ownerUsername: {
		type: String,
		required: true,
		ref: 'User'
	},
	requests: [{
		username: String
	}],
	isBorrowed: {
		type: Boolean,
		default: false
	},
	borrower: {
		username: {
			type: String,
			ref: 'User'
		},
		isFinished: {
			type: Boolean,
			default: false
		}
	}
});

var Item = mongoose.model('Item', itemSchema);

module.exports = Item;