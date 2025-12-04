/* Router for login/register routes */ 

const express = require('express'); 
const router = express.Router(); 

const ctrlAuth = require('../controllers/users');
  

/* GET register page. */ 
router.get('/', ctrlAuth.registerF);  

/* GET login page. */ 
router.get('/login', ctrlAuth.loginF);  

/* POST register form */
router.post('/', ctrlAuth.registerU);

/* POST login form */
router.post('/login', ctrlAuth.loginU);

/* GET logout */
router.get('/logout', ctrlAuth.logoutU)

module.exports = router; 