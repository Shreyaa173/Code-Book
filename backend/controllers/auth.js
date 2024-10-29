const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
require("dotenv").config();
const nodemailer = require("nodemailer");

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
  return jwt.sign({ email: user.email, id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "24h",
  });
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

    const existingUser = await User.findOne({ email }).select("email");
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
      image: `https://api.dicebear.com/5.x/initials/svg?seed=${encodeURIComponent(
        name
      )}`,
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
    const user = await User.findOne({ email }).select("+password");

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

    res
      .cookie("token", token, {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
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

router.post("/forgotpassword", async (req, resp) => {
  const { forgotEmail } = req.body;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "taskmaster991@gmail.com",
      pass: "kmepakzcabvztekd",
    },
  });

  const mailOptions = {
    from: "taskmaster991@gmail.com",
    to: forgotEmail,
    subject: "Reset Your Password - CodeBook",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px; background-color: #f9f9f9;">
        <h2 style="text-align: center; color: #333;">Password Reset Request</h2>
        <p style="color: #555;">
          Hello,
        </p>
        <p style="color: #555;">
          We received a request to reset your password for your CodeBook account. If you didn't make this request, please ignore this email.
        </p>
        <p style="color: #555;">
          To reset your password, click the button below:
        </p>
        <div style="text-align: center; margin: 20px 0;">
          <a href="https://code-book-kappa.vercel.app/resetpassword" style="text-decoration: none;">
            <button style="background-color: #007bff; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer;">
              Reset Password
            </button>
          </a>
        </div>
        <p style="color: #555;">
          If you have any questions, feel free to reach out to our support team.
        </p>
        <p style="color: #555;">
          Thank you,<br>
          Team CodeBook 
        </p>
      </div>
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error sending email: " + error);
      resp.status(500).send("Error sending email");
    } else {
      console.log("Email sent: " + info.response);
      resp.status(200).send({ message: "Form data sent successfully" });
    }
  });
});

//reset password
router.post("/resetpassword", async (req, resp) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return resp.status(404).json({ message: "User not found" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.updateOne(
      { email },
      { password: hashedPassword },
      { runValidators: false }
    );

    resp.status(200).json({ message: "Password has been reset successfully" });
  } catch (error) {
    console.log(error);
    resp.status(500).json({ message: "Server error" });
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


