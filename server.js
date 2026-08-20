const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// ===============================
// Middleware
// ===============================
app.use(cors());
app.use(express.json());

// ===============================
// Environment variables
// ===============================
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// ===============================
// MongoDB Connection
// ===============================
async function connectDB() {
  try {
    if (!MONGO_URI) {
      console.log("⚠️ MONGO_URI is not set in .env");
      return;
    }

    await mongoose.connect(MONGO_URI);

    console.log("✅ MongoDB connected successfully");
  } catch (error) {
    console.error("❌ MongoDB connection failed:");
    console.error(error.message);
  }
}

// ===============================
// Health Check
// ===============================
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    message: "AgroSaarthi backend is running",
    database:
      mongoose.connection.readyState === 1
        ? "MongoDB connected"
        : "MongoDB not connected",
  });
});

// ===============================
// Test API
// ===============================
app.get("/api/test", (req, res) => {
  res.json({
    success: true,
    message: "AgroSaarthi API is working",
  });
});

// ===============================
// Start Server
// ===============================
async function startServer() {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`🚀 AgroSaarthi backend running on http://localhost:${PORT}`);
  });
}

startServer();