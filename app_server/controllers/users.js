/* Controller for users login/register */ 
const mongoose = require('mongoose');
const User = mongoose.model('User'); 

const registerF = function(req, res){  
res.render('register', { title: 'Register' , 
	message: 'Already have an account? Log in '});  
}; 

const loginF = function(req, res){  
res.render('login', { title: 'Login' , 
	message: 'Dont have an account? Create one '});  
}; 

const registerU = function(req, res) {
  console.log('POST /auth/ received');
  console.log('Request body:', req.body);
  
  // Check if we're getting the form data
  if (!req.body.forename || !req.body.email || !req.body.password) {
    console.log('Missing required fields');
    return res.render('register', {
      title: 'Registration Error',
      message: 'Registration failed',
      error: 'Missing required fields'
    });
  }

  User.create({
    name: req.body.forename,      // Map to 'name' in schema
    phone: req.body.phone,
    email: req.body.email,
    password: req.body.password,
    address: ''  // Add empty address since it's in schema
  })
  .then(user => {
    console.log('User created successfully:', user);
    res.redirect('/login?message=Registration successful! Please login.');
  })
  .catch(err => {
    console.log('Error creating user:', err);
    let errorMessage = 'Registration failed';
    
    if (err.code === 11000) {
      errorMessage = 'Email already exists';
    } else if (err.errors) {
      errorMessage = Object.values(err.errors).map(e => e.message).join(', ');
    }
    
    res.render('register', {
      title: 'Registration Error',
      message: 'Registration failed',
      error: errorMessage
    });
  });
};
module.exports = {  
registerF,
loginF,
registerU
}; 