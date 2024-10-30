/** @format */

const mongoose = require("mongoose");

// Define the Profile schema
const profileSchema = new mongoose.Schema({
	gender: {
		type: String,
	},
	dateOfBirth: {
		type: String,
	},
	about: {
		type: String,
		trim: true,
	},
	contactNumber: {
		type: String,
		trim: true,
	},
});

// Export the Profile model
module.exports = mongoose.model("Profile", profileSchema);
