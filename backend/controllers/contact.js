/** @format */

const express = require("express");
const router = express.Router();
const { contactUsEmail } = require("../mail/template/contactFormRes");
const mailSender = require("../utils/mailSender");

router.post("/contact", async (req, res) => {
	const { email, name, message, phoneNo } = req.body;
	console.log(req.body);
	try {
		const emailRes = await mailSender(
			email,
			"Your Data send successfully",
			contactUsEmail(email, name, message, phoneNo)
		);

		console.log("Email Res ", emailRes);
		return res.json({
			success: true,
			message: "Email send successfully",
		});
		//
	} catch (error) {
		console.log("Error message:\n", error.message);
		return res.json({
			success: false,
			message: "Something went wrong...",
		});
	}
});


module.exports = router;
