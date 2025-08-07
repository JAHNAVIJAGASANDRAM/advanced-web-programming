const express = require("express");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(express.json()); // replaces body-parser

const PORT = 3000;
const JWT_SECRET = "yourSecretKey123"; //sign and verify JWT tokens
const filePath = path.join("data", "students.json");

// Dummy user
const USER = {
 username: "admin",
 password: "admin123"
};

// Helper: Read data from file
function readData() {
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
} // <-- Add this closing brace

// Helper: Write data to file
function writeData(data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

//  Login route
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === USER.username && password === USER.password) {
    const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: "1h" });
    res.json({ token });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

// Token middleware
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.status(401).json({ message: "Token required" });

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: "Invalid or expired token" });
    req.user = user;
    next();
  });
}

//  CRUD ROUTES

// CREATE
app.post("/students", authenticateToken, (req, res) => {
  const students = readData();
  const newStudent = {
    id: req.body.id, // keep as string for consistency
    name: req.body.name,
    age: req.body.age, // add age field
    course: req.body.course
  };
  students.push(newStudent);
  writeData(students);
  res.status(201).json(newStudent);
});

// READ ALL
app.get("/students", authenticateToken, (req, res) => {
  const students = readData();
  res.json(students);
});

// READ ONE
app.get("/students/:id", authenticateToken, (req, res) => {
  const students = readData();
  const student = students.find((s) => s.id === req.params.id);
  if (!student) return res.status(404).json({ message: "Student not found" });
  res.json(student);
});

// UPDATE
app.put("/students/:id", authenticateToken, (req, res) => {
  const students = readData();
  const student = students.find((s) => s.id === parseInt(req.params.id));
  if (!student) return res.status(404).json({ message: "Student not found" });

  student.name = req.body.name || student.name;
  student.age = req.body.age || student.age;
  student.course = req.body.course || student.course;

  writeData(students);
  res.json(student);
});

// DELETE
app.delete("/students/:id", authenticateToken, (req, res) => {
  let students = readData();
  const index = students.findIndex((s) => s.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: "Student not found" });

  students.splice(index, 1);
  writeData(students);
  res.status(204).send();
});

//  Start Server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
