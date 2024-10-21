/** @format */

const mongoose = require("mongoose");
require("dotenv").config();

const database_name = "code_book";

exports.dbConnect = () => {
	mongoose
		.connect(process.env.MONGODB_URL + database_name, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		.then(() => {
			console.log("Db connect successfully");
		})
		.catch((err) => {
			console.log("Error in db connection");
		});
};
