/* Router for home page routes */ 

const express = require('express'); 
const router = express.Router(); 

const ctrlLib = require('../controllers/library');  

/* GET library page. */ 
router.get('/', ctrlLib.libraryF);  

module.exports = router; 