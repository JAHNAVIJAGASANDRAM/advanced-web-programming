const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// create user
let users = [
  { id: 1, name: 'alice' },
  { id: 2, name: 'bob' }
];

// Create a new user
app.post('/users', (req, res) => { 
  const newUser = { id: users.length + 1, name: req.body.name }; 
  users.push(newUser); 
  res.status(201).json(newUser);
});

// Get all users
app.get('/users', (req, res) => { 
  res.json(users);
});

// Get user by ID
app.get('/users/:id', (req, res) => { 
  const user = users.find(u => u.id == req.params.id); 
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// Update user by ID
app.put('/users/:id', (req, res) => {
  const user = users.find(u => u.id == req.params.id);
  if (user) {
    user.name = req.body.name;
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// Delete user by ID
app.delete('/users/:id', (req, res) => { 
  users = users.filter(u => u.id != req.params.id); 
  res.json({ message: 'User deleted' });
});

// Start the server
app.listen(port, () => {  
  console.log(`REST API running at http://localhost:${port}`);
});
