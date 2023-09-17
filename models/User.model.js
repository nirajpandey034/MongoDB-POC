const mongoose = require("mongoose");

const UserPersonalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  yob: {
    type: Number,
    required: true,
  },
  books: {
    type: Array,
    required: true,
  },
});

const User = mongoose.model("Personal", UserPersonalSchema, "personal");
module.exports = User;
