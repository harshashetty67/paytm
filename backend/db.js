const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.connect('mongodb+srv://admin:HR2z6atQHrRmczMW@cluster0.1ofiig7.mongodb.net/PayTM'); // add mongoDB url

// DB level validation for the fields.
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    sparse: true,
    lowercase: true,
    minLength: 3,
    maxLength: 30
  },
  password: {
    type: String,
    required: true,
    minLength: 6
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
    maxLength: 50
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    maxLength: 50
  }
});

const accountSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId, // Reference to _id in User model
    ref: 'User',
    required: true
  },
  balance: {
    type: Number,
    required: true
  }
});

// Creating model from schema
const User = mongoose.model('User', userSchema);
const Account = mongoose.model('Account', accountSchema);

module.exports = { User, Account };