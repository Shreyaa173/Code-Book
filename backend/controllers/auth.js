const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User"); // Make sure this path is correct
require("dotenv").config(); // Ensure you have access to environment variables

// Route for user signup
router.post("/signup", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check for missing fields
        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "All Fields are required",
            });
        }

        // Validate email format
        if (!email.includes("@gmail.com")) {
            return res.status(400).json({
                success: false,
                message: "Invalid Email!",
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

        // Create user in db
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            image: `https://api.dicebear.com/5.x/initials/svg?seed=${name}`,
        });

        res.status(200).json({
            success: true,
            user,
            message: "User registered successfully!",
        });
    } catch (error) {
        console.error("Signup Error:", error.message);
        res.status(500).json({
            success: false,
            message: "User cannot be registered, Please try again!",
        });
    }
});

// Route for user login
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if email or password is missing
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required!",
            });
        }

        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "User is not registered. Please sign up to continue.",
            });
        }

        // Compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: "Password is incorrect",
            });
        }

        // Generate JWT token
        const token = jwt.sign({ email: user.email, id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "24h",
        });

        // Set cookie for token and return success response
        res.cookie("token", token, { expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), httpOnly: true })
            .status(200)
            .json({
                success: true,
                token,
                user: { ...user._doc, password: undefined },
                message: "User Login Successfully!",
            });
    } catch (error) {
        console.error("Login Error:", error.message);
        res.status(500).json({
            success: false,
            message: "Login Failure, Please Try Again!",
        });
    }
});

// Export the router to use it in the main server file
module.exports = router;
