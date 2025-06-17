const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const db = require("./config/db");
require("dotenv").config();
const PORT = process.env.PORT || 3000;
const server = express();
server.use(
  cors({
    origin: [process.env.CORS_ORIGIN, process.env.CORS_ORIGIN_LOCAL],
  })
);

server.use(bodyParser.json());
server.get("/", (req, res) => {
  res.send("Welcome to the backend server!");
});

server.use("/api/auth", authRoutes);
server.use("/api/dashboard", dashboardRoutes);

server.get("/api/messages", (req, res) => {
  db.query("SELECT * FROM messages", (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

server.put("/api/messages/:id", (req, res) => {
  const { id } = req.params;
  const { content } = req.body;
  db.query(
    "UPDATE messages SET content = ? WHERE id = ?",
    [content, id],
    (err) => {
      if (err) return res.status(500).send(err);
      res.send("Message updated successfully");
    }
  );
});

// Get all jobs
server.get("/api/jobs", (req, res) => {
  const demoJobs = JSON.parse(process.env.DEMO_JOBS || "[]");
  return res.json(demoJobs);
  db.query("SELECT * FROM jobs", (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

// Add a job
server.post("/api/jobs", (req, res) => {
  const { title, description, skills } = req.body;
  db.query(
    "INSERT INTO jobs (title, description, skills) VALUES (?, ?, ?)",
    [title, description, JSON.stringify(skills)],
    (err) => {
      if (err) return res.status(500).send(err);
      res.send("Job added successfully");
    }
  );
});

// Delete a job
server.delete("/api/jobs/:id", (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM jobs WHERE id = ?", [id], (err) => {
    if (err) return res.status(500).send(err);
    res.send("Job deleted successfully");
  });
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
