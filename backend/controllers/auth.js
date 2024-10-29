const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
require("dotenv").config();

// Validation middleware
const validateAuthFields = (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({
            success: false,
            message: "All fields are required!",
        });
    }
    next();
};

// Email validation middleware
const validateEmail = (req, res, next) => {
    const { email } = req.body;
    const emailRegex = /^[^\s@]+@gmail\.com$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({
            success: false,
            message: "Invalid Email!",
        });
    }
    next();
};

// JWT token generation utility
const generateToken = (user) => {
    return jwt.sign(
        { email: user.email, id: user._id },
        process.env.JWT_SECRET,
        { expiresIn: "24h" }
    );
};

// Error handler utility
const handleError = (res, error, message) => {
    console.error(`Error: ${error.message}`);
    return res.status(500).json({
        success: false,
        message: message,
    });
};

// Route for user signup
router.post("/signup", validateAuthFields, validateEmail, async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name) {
            return res.status(400).json({
                success: false,
                message: "Name is required",
            });
        }

        const existingUser = await User.findOne({ email }).select('email');
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User already exists. Please login to continue.",
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            image: `https://api.dicebear.com/5.x/initials/svg?seed=${encodeURIComponent(name)}`,
        });

        res.status(201).json({
            success: true,
            user: { ...user._doc, password: undefined },
            message: "User registered successfully!",
        });
    } catch (error) {
        handleError(res, error, "User cannot be registered, Please try again!");
    }
});

// Route for user login
router.post("/login", validateAuthFields, async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email }).select('+password');
        
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "User is not registered. Please sign up to continue.",
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: "Password is incorrect",
            });
        }

        const token = generateToken(user);
        user.password = undefined;

        res.cookie("token", token, {
            expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict'
        })
        .status(200)
        .json({
            success: true,
            token,
            user,
            message: "User Login Successfully!",
        });
    } catch (error) {
        handleError(res, error, "Login Failure, Please Try Again!");
    }
});


router.delete("/deleteProfile", async (req, res) => {
    try {
        const { email } = req.body;
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }
        const { _id } = user;
        console.log(_id)

        // Now Delete User
        await User.findByIdAndDelete({ _id: _id });
        res.status(200).json({
            success: true,
            message: "User deleted successfully",
        });

        //
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            success: false,
            message: "User Cannot be deleted successfully",
        });
    }
})

// Export the router to use it in the main server file
module.exports = router;

