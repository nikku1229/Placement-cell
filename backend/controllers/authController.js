const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
require("dotenv").config();

exports.getUserInfo = (req, res) => {
  const user = req.user;
  res.json(user);
};

exports.register = (req, res) => {
  const { name, email, password, role } = req.body;

  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) return res.status(500).json({ message: "Error hashing password" });

    User.createUser(name, email, hashedPassword, role, (error, results) => {
      if (error)
        return res.status(500).json({ message: "Error registering user" });
      res.status(201).json({ message: "User registered successfully" });
    });
  });
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  if (email === process.env.DEMO_EMAIL_ID || password === process.env.DEMO_PASSWORD) {
    const token = jwt.sign(
      { id: 1, role: "student", name: "Nitish Sharma" }, // Dummy values for id and role
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );
    return res.json({
      token,
      user: {
        id: 1,
        role: "student",
        name: "Nitish Sharma",
        email: "nitishsharma@satyug.edu.in",
      },
    });
  }

  User.findUserByEmail(email, (error, results) => {
    if (error || results.length === 0) {
      return res.status(401).json({ message: "User not found" });
    }

    const user = results[0];

    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (!isMatch)
        return res.status(401).json({ message: "Invalid credentials" });

      const token = jwt.sign(
        { id: user.id, role: user.role, name: user.name },
        process.env.JWT_SECRET,
        {
          expiresIn: "1h",
        }
      );

      res.json({
        token,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
      });
    });
  });
};
