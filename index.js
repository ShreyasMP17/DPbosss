const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Sample API route
app.get("/", (req, res) => {
    res.send({ message: "Welcome to the backend API!" });
});

// Add more routes as needed
app.get("/api/example", (req, res) => {
    res.json({ data: "This is an example endpoint" });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
