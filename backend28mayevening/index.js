const express = require("express");
const cors = require('cors')
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

dotenv.config();

const app = express();

// ✅ Enable CORS for frontend
app.use(cors({
  origin: 'http://localhost:3000', // allow requests from React dev server
  credentials: true, // if you're using cookies or sessions
}))

app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use("/api/auth", authRoutes);

// Start Server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
