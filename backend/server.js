const express = require("express");

const app = express();
const port = 3000;

// CORS setup
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:8080");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.get("/", (_req, res) => {
  res.send("AETHER backend is running.");
});

app.get("/health", (_req, res) => {
  res.json({ status: "ok", service: "AETHER backend" });
});

app.get("/status", (_req, res) => {
  res.json({
    service: "AETHER backend",
    status: "running",
    time: new Date().toISOString()
  });
});

app.listen(port, () => {
  console.log(`AETHER backend running on port ${port}`);
});
