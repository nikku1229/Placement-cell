const express = require("express");
const { authenticateUser, authorizeRoles } = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/student-dashboard", authenticateUser, authorizeRoles(["student"]), (req, res) => {
  res.json({ message: `Welcome to Student Dashboard, ${req.user.id}` });
});

router.get("/admin-dashboard", authenticateUser, authorizeRoles(["admin"]), (req, res) => {
  res.json({ message: `Welcome to Admin Dashboard, ${req.user.id}` });
});

module.exports = router;