//Dependencies:

const express = require('express');
const mongoose = require('mongoose');
const {PORT} = require('../clientConfig');

const dotenvConfig = require('dotenv').config();
const userRouter = require('./routes/userRouter');
const app = express();

//Database connection:
mongoose
  .connect(dotenvConfig.parsed.MONGO_URI)
  .then(() => {
    console.log('successfuly connected to database.');
  })
  .catch(error => {
    console.log('connect database error :' + error.message);
  });

//Middlewares:

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded

// Routers:

app.use(userRouter);

//Check connect:
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Welcome the server!',
  });
});

app.listen(PORT, (req, res) => {
  console.log(`${PORT} is listening...`);
});
