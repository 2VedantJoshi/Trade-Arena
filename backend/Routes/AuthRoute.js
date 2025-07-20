const express = require("express");
const { Signup, Login } = require("../Controllers/AuthController");
const { userVerification } = require("../Middlewares/AuthMiddleware"); // ✅ Import middleware

const router = express.Router();

router.post("/signup", Signup);
router.post("/login", Login);
router.post("/", userVerification); // ✅ Auth check route

module.exports = router;
