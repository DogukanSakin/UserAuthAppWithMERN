//Dependencies:

const express = require('express');
const mongoose = require('mongoose');
const dotenvConfig = require('dotenv').config();
const userRouter = require('./routes/userRouter');
const app = express();

//Values:
const port = 8000;

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

//Others
app.listen(port, (req, res) => {
  console.log(`${port} is listening...`);
});
