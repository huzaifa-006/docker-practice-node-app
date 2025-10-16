const express = require("express");
const mongoose = require("mongoose");
const app = express();

const mongoURL = process.env.MONGO_URL || "mongodb://localhost:27017/dockerDB";

mongoose
  .connect(mongoURL)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.log("❌ MongoDB connection error:", err));

app.get("/", (req, res) => {
  res.send("✅ Docker + Node + MongoDB working!");
});

app.listen(3000, () => {
  console.log("🚀 Server running on port 3000");
});
