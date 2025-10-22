/* Router for login/register routes */ 

const express = require('express'); 
const router = express.Router(); 

const ctrlAuth = require('../controllers/auth');  

/* GET register page. */ 
router.get('/', ctrlAuth.registerF);  

/* GET login page. */ 
router.get('/login', ctrlAuth.loginF);  

module.exports = router; 