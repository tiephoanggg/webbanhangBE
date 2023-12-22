// Import Mongoose
const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define User Schema
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ['M', 'F'],
    required: true,
  },
  dateOfBirth: {
    type: Date,
    default: Date.now,
    require:true,
  },
  role: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: false,
  },
  address: {
    type: String,
    required: false,
  },
}, { timestamps: true }); // Option to add timestamps

// Create User model
const User = mongoose.model('User', userSchema);

module.exports = User;
