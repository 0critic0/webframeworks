const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  address: String,
  phone: String
});

mongoose.model('User', userSchema);