const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');

const PORT = 7000 || process.env.PORT;

const app = express();

app.use(express.static("public"));

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Currently listening on ${PORT}`)
});


//Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dbExample", { useNewUrlParser: true });
