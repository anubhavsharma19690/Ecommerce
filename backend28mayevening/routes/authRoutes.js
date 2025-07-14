const express = require("express");
const router = express.Router();
const { signup } = require("../controllers/auth/signupController");

const {loginUser}= require("../controllers/auth/loginController")

router.post("/signup", signup);
router.post("/login",loginUser)

module.exports = router;
