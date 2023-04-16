const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  office: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  start: {
    type: String,
  },
  salary: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema, );

// books
