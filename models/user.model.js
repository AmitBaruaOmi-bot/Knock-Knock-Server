const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema(

  {
    name: {
      type: String,
      required: true
    },
  
    location: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: [true, 'Email is required.'],
      unique: true,
      match: [/\S+@\S+\.\S+/, 'Please enter a valid email address.']
    },
    password: {
      type: String,
      required: [true, 'Password is required.']
    }
  }

);


const user = mongoose.model('user', userSchema);
module.exports = user;
