const mongoose = require('mongoose');
const { Schema } = require("mongoose");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    location:{
      type: String,
      required: true
    },
    email: {
      type: String,
      required: [true, 'Email is required.'],
      unique: true,
      lowercase: true,
      trim: true
    },
    password: {
      type: String,
      required: [true, 'Password is required.']
    }
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`    
    timestamps: true
  }
);

module.exports = mongoose.model('user', userSchema);
