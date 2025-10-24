const mongoose = require('mongoose');
const librarySchema = new mongoose.Schema({ 
  userId: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    'default': 0,
    min:0,
    max:5
  },
  genres: [String],
  status: String
}); 

mongoose.model('Library', librarySchema);