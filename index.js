// server.js
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/UserRoutes");
const playlistRoutes = require("./routes/PlayListRoutes");
const classRoutes = require("./routes/LessonListRoutes"); // Import the class routes

const cors = require("cors");

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/playlists", playlistRoutes);
app.use("/api", classRoutes); // Prefix the routes with `/api`

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
