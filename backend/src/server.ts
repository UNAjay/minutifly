import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();

// Middleware to parse JSON
app.use(express.json());

// ---------------- Routes ----------------

// Test route
app.get("/api/test", (req, res) => {
  res.send("Backend is working fine ✅");
});

// Example: GET all users
app.get("/api/users", (req, res) => {
  const users = [
    { id: 1, name: "Ajay", role: "admin" },
    { id: 2, name: "Rahul", role: "user" },
  ];
  res.json(users);
});

// Example: GET user by ID
app.get("/api/users/:id", (req, res) => {
  const { id } = req.params;
  const user = { id, name: `User ${id}`, role: "guest" };
  res.json(user);
});

// Example: POST create a new user
app.post("/api/users", (req, res) => {
  const { name, role } = req.body;
  res.status(201).json({ id: Date.now(), name, role });
});

// Example: PUT update a user
app.put("/api/users/:id", (req, res) => {
  const { id } = req.params;
  const { name, role } = req.body;
  res.json({ id, name, role, updated: true });
});

// Example: DELETE a user
app.delete("/api/users/:id", (req, res) => {
  const { id } = req.params;
  res.json({ message: `User ${id} deleted successfully` });
});

// ---------------- Server ----------------
const PORT = process.env.PORT || 5007;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost
