const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  exercise: {
    type: String,
    trim: true

  }
})