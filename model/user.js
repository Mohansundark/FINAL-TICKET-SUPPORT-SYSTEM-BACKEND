const mongoose = require('mongoose');

// Define the User schema
const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	isAdmin: {
		type: Boolean,
		default: false
	}
});

// Create the User model
const user = mongoose.model('user', userSchema);

module.exports = user;
