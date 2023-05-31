// // // const express = require('express')
// // // const app = express()

// // // app.use((req,res,next) => {
// // //     console.log('loading......');
// // //     next();
// // // });

// // // app.get('/users', (req, res) => {
// // //     res.send("hii");
// // //   });

// // // app.listen(3000, () => {
// // //   console.log('Server started on port 3000')
// // // });


// // const express = require('express');
// // const app = express();

// // // Define authentication middleware function
// // const authenticate = (req, res, next) => {
// //   const token = req.headers['authorization'];

// //   if (!token) {
// //     return res.status(401).json({ message: 'Unauthorized' });
// //   }

// //   // Perform authentication check
// //   // ...

// //   next();
// // };

// // // Register authentication middleware function for all protected routes
// // app.use('/api/protected', authenticate);

// // // Define protected route handler
// // app.get('/api/protected/data', (req, res) => {
// //   res.json({ message: 'This is protected data' });
// // });

// // // Start server
// // app.listen(3000, () => {
// //   console.log('Server listening on port 3000');
// // });




// const express = require('express');
// const app = express();

// // Define middleware function
// const myMiddleware = (req, res, next) => {
//   const authHeader = req.headers.authorization;
  
//   if (!authHeader || !authHeader.startsWith('Bearer ')) {
//     return res.status(401).json({ message: 'Unauthorized' });
//   }

//   // Perform authentication check here, e.g. by decoding and verifying the token
//   // ...

//   console.log('This is my middleware function');
//   next();
// };

// // Register middleware function for all routes
// app.use(myMiddleware);

// // Define route handler
// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// // Start server
// app.listen(3000, () => {
//   console.log('Server listening on port 3000');
// });

// const express = require('express');
// const app = express();

// Define logging middleware function

// const logger = (req, res, next) => {
//   console.log(`${req.method} ${req.path}`); //bagundhee
//   next();
// };

// // Register logging middleware function for all routes
// app.use(logger);

// // Define route handlers
// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// app.get('/api/data', (req, res) => {
//   res.json({ message: 'This is data' });
// });

// // Start server
// app.listen(3000, () => {
//   console.log('Server listening on port 3000');
// });

const express = require('express');
const app = express();

// Define error handling middleware function
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
};

// Register error handling middleware function at the end of the middleware chain
app.use(errorHandler);

// Define route handler that throws an error
app.get('/api/error', (req, res, next) => {
  const err = new Error('This is an error');
  next(err);
});

// Start server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
