const mongoose = require('mongoose'); 
const Book = mongoose.model('Book'); 

const bookList = function (req, res) {
 Book.find({})
    .then(books => {
      console.log('Books from database:', books);       
      res.status(200).json(books);
     })
    .catch(err => {
      console.log('Error:', err);
      res.status(500).json({error: err.message});
    });
};

const bookReadOne = function(req, res) { 
  if (req.params && req.params.bookid) {   
    Book
      .findById(req.params.bookid)
      .then((book, err) => {
        if (!book) {
          res
            .status(404)
            .json({"message": "bookid not found"});
          return;
        } else if (err) {
          res
            .status(404)
            .json(err);
          return;
        }
        res
          .status(200)
          .json(book);
      });
  } else {
    res
      .status(404)
      .json({
        "message": "No bookid in request"
      });
  }
};

const bookUpdateOne = function (req, res) {res .status(200) .json({"status" : "success"});  };

module.exports = {
  bookList,
  bookReadOne,
  bookUpdateOne
};