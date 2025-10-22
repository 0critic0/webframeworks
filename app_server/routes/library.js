/* Router for library routes */ 

const express = require('express'); 
const router = express.Router(); 

const ctrlLib = require('../controllers/data');  

/* GET library page. */ 
router.get('/', ctrlLib.libraryF);  

module.exports = router; 