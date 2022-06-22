const express = require('express');
const cors = require('cors');
const router = require('./route');
require('dotenv').config();

//Config
const app = express();

app.use(
  cors({
    origin: true,
    credentials: true,
  }),
);

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

router(app)
//test connection
app.get('/', (req, res) => {
  res.send('Hello my database');
});

module.exports = app;

