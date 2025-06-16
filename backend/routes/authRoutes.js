const express = require("express");
const {
  register,
  login,
  getUserInfo,
} = require("../controllers/authController");
const { authenticateUser } = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/me",authenticateUser, getUserInfo);

module.exports = router;
