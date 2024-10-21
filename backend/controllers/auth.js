// Import the required modules
require("dotenv").config();
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

// Route for user login
router.post("/login", async (req, res) => {
	try {
		// Get email and password from request body
		const { email, password } = req.body;

		// Check if email or password is missing
		if (!email || !password) {
			// Return 400 Bad Request status code with error message
			return res.status(400).json({
				success: false,
				message: `All fields are required!`,
			});
		}

		// Find user exist or not for this email
		const user = await User.findOne({ email });

		// If user not found
		if (!user) {
			// Return 401 Unauthorized status code with error message
			return res.status(401).json({
				success: false,
				message: `User is not Registered with Us Please SignUp to Continue`,
			});
		}

		// Generate JWT token and Compare Password
		if (await bcrypt.compare(password, user.password)) {
			const token = jwt.sign(
				{
					email: user.email,
					id: user._id,
				},
				process.env.JWT_SECRET,
				{
					expiresIn: "24h",
				}
			);

			// Save token to user document in database
			user._doc.token = token;
			user._doc.password = undefined;

			// Set cookie for token and return success response
			const options = {
				expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
				httpOnly: true,
			};

			res.cookie("token", token, options).status(200).json({
				success: true,
				token,
				user,
				message: `User Login Successfully!`,
			});
			//
		} else {
			return res.status(401).json({
				success: false,
				message: `Password is incorrect`,
			});
		}
		//
	} catch (error) {
		console.error(error);
		// Return 500 Internal Server Error status code with error message
		return res.status(500).json({
			success: false,
			message: `Login Failure, Please Try Again!`,
		});
	}
});

// Route for user signup
router.post("/signup", async (req, res) => {
	try {
		// fetch all data from the request body
		console.log("body");
		console.log(req.body);
		const { firstName, lastName, email, password, confirmPassword } = req.body;

		// Check if All Details are there or not
		if (!firstName || !lastName || !email || !password || !confirmPassword) {
			return res.status(403).send({
				success: false,
				message: "All Fields are required",
			});
		}

		if (!email.includes("@gmail.com")) {
			return res.status(400).send({
				success: false,
				message: "Invalid Email!",
			});
		}

		// Check if password and confirm password match or not
		if (password !== confirmPassword) {
			return res.status(400).json({
				success: false,
				message:
					"Password and Confirm Password do not match. Please try again.",
			});
		}

		// Check if user already exists
		const existingUser = await User.findOne({ email });
		if (existingUser) {
			return res.status(400).json({
				success: false,
				message: "User already exists. Please login to continue.",
			});
		}

		// Hash the password
		const hashedPassword = await bcrypt.hash(password, 10);

		// create user in db
		const user = await User.create({
			firstName,
			lastName,
			email,
			password: hashedPassword,
			image: `https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`,
		});

		return res.status(200).json({
			success: true,
			user,
			message: "User registered successfully!",
		});
		//
	} catch (error) {
		console.log(error.message);
		return res.status(500).json({
			success: false,
			message: "User cannot be registered, Please try again!",
		});
	}
});

module.exports = router;
