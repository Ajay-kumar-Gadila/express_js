const express = require('express');
const app = express();

app.use(express.json());

let data = {
  name: 'John Doe',
  age: 30,
  email: 'johndoe@example.com'
};

app.put('/users', (req, res) => {
  data = req.body;
  res.send('User data updated successfully');
});

app.delete('/users', (req, res) => {
    data = {}; // emptying the data object
    res.send('User data deleted successfully');
  });
  
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
