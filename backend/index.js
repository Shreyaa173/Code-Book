/** @format */

// Importing necessary modules and packages
const express = require("express");
const app = express();
const userController = require("./controllers/auth");
const database = require("./config/database");
const cookieParser = require("cookie-parser");
const cors = require("cors");

// Loading environment variables from .env file
require("dotenv").config();

// Setting up port number
const PORT = process.env.PORT || 4000;

// Connecting to database
database.dbConnect();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
	cors({
		origin: "*",
		credentials: true,
	})
);

// Setting up routes
app.use("/api/v1/auth", userController);

// Testing the server
app.get("/", (req, res) => {
	return res.json({
		success: true,
		message: "Your server is up and running ...",
	});
});

// Listening to the server
app.listen(PORT, () => {
	console.log(`App is listening at ${PORT}`);
});

// End of code.
