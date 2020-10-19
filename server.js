const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const PORT = 7000 || process.env.PORT;

const app = express();

app.use(express.static("public"));

app.get('/exercise', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/exercise.html'));
})

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Currently listening on ${PORT}`)
});

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/dbExercise')




//Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dbExercise", { useNewUrlParser: true });
