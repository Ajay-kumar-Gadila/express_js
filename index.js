const express = require('express');
const app = express();

app.use(express.json());

const products = [
  {
    id: 1,
    mobile: 'Samsung'
  }
];

app.get('/getu', (req, res) => {
  res.json(products);
});

app.post('/postu', (req, res) => {
  const {id, mobile} = req.body;
  console.log(id, mobile);
  products.push({id, mobile});
  res.send('Data stored successfully.');
});

app.listen(3000, () => {
  console.log('Server running on port 3000.');
});
