const express = require('express');
const app = express();

app.use(express.json()); // This middleware will parse incoming JSON data

app.post('/api/users', (req, res) => {
  // Do something with the received data
  console.log(req.body);

  // Send a response to the client
  res.send('User created successfully!');
});

app.put('/api/users/:id', (req, res) => {
    const userId = req.params.id;
    // Do something with the received data
    console.log(`Updating user with ID ${userId}:`, req.body);
    // Send a response to the client
    res.send(`User with ID ${userId} updated successfully!`);
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
