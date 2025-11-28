const express = require('express'); 
const router = express.Router(); 
const ctrlLibrary = require('../controllers/library'); 

// Library
router 
  .route('/library') 
  .get(ctrlLibrary.bookList) 

router 
  .route('/library/:bookid') 
  .get(ctrlLibrary.bookReadOne)
  .put(ctrlLibrary.bookUpdateOne) 

// Auth
//router 
//  .route('/login') 
//  .post(ctrlAuth.loginReadOne); 

//router 
//  .route('/register') 
//  .get(ctrlAuth.registerReadOne) 
//  .put(ctrlAuth.registerUpdateOne) 

module.exports = router; 