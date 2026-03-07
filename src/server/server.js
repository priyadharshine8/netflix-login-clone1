const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors()); // allow requests from frontend
app.use(express.json()); // parse JSON body

// Mock login endpoint
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Mock credentials
  if (email === "user@test.com" && password === "123456") {
    res.json({ success: true, message: "Login successful!" });
  } else {
    res.status(401).json({ success: false, message: "Invalid credentials" });
  }
});

// Health check
app.get("/", (req, res) => {
  res.send("Server is running");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});