const express = require('express');
const app = express();

app.use(express.json());



const products = [
  {
    id: 1,
    mobile: 'Samsung'
  }
];

app.get('/users', (req, res) => {
  res.json(products);
});

app.post('/users', (req, res) => {
  const {id, mobile} = req.body;
  console.log(id, mobile);
  products.push({id, mobile});
  res.send({id,mobile});

//   res.send('Data stored successfully.ID: ${id}, Mobile: ${mobile}');
  

});

app.put('/users', (req, res) => {
  const {id, mobile} = req.body;
  data = req.body;
  res.send('User data updated successfully');
  console.log(id,mobile);
});

app.delete('/users', (req, res) => {
  if (Object.keys(data).length === 0) {
    res.send('No user data found to delete.');
    console.log("No user data found to delete.");
  } else {
    data = {}; // emptying the data object
    res.send('User data deleted successfully');
    console.log("deleted succesfully");
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
