const jwt = require("jsonwebtoken");
require("dotenv").config();

const authenticateUser = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) return res.status(401).json({ message: "Access Denied" });

  try {
    const tokenParts = token.split(" ");
    if (tokenParts[0] !== "Bearer" || !tokenParts[1]) {
      console.error("Invalid token format");
      return res.status(401).json({ message: "Invalid token format" });
    }

    const verified = jwt.verify(tokenParts[1], process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    console.error("Token verification failed:", err.message);
    res.status(400).json({ message: "Invalid Token" });
  }
};

const authorizeRoles = (roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res
        .status(403)
        .json({ message: "Access Denied: Unauthorized Role" });
    }
    next();
  };
};

module.exports = { authenticateUser, authorizeRoles };
