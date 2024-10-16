const express = require("express");
const { SendEmailController } = require("../controllers/controller");

const router = express.Router();

router.post("/sendEmail", SendEmailController);

module.exports = router;
