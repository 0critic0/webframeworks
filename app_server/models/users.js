const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  address: String,
  phone: String
});

userSchema.plugin(passportLocalMongoose, {
  usernameField: 'email',  
  usernameUnique: true     
});

mongoose.model('User', userSchema);