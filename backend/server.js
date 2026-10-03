const express = require("express");
const cors = require("cors");

const app = express();

const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Demo user credentials
const user = {
    email: "demo@example.com",
    password: "password123"
};

// Home route
app.get("/", (req, res) => {
    res.json({
        message: "Login API is running"
    });
});

// Login API
app.post("/api/login", (req, res) => {
    const { email, password } = req.body;

    // Check if fields are provided
    if (!email || !password) {
        return res.status(400).json({
            success: false,
            message: "Email and password are required."
        });
    }

    // Check credentials
    if (email === user.email && password === user.password) {
        return res.status(200).json({
            success: true,
            message: "Login successful!",
            user: {
                email: email
            }
        });
    }

    // Invalid credentials
    return res.status(401).json({
        success: false,
        message: "Invalid email or password."
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});