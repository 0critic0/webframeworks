const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema({ 
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
    min: 0,
    max: 5
  },
  genres: [String],
  status: String,

  totalPages: {              
    type: Number,
    'default': 0
  },
  pagesRead: {           
    type: Number,
    'default': 0
  }
}); 

mongoose.model('Book', bookSchema);