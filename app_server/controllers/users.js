/* Controller for users login/register */ 

const registerF = function(req, res){  
res.render('register', { title: 'Register' , 
	message: 'Already have an account? Log in '});  
}; 

const loginF = function(req, res){  
res.render('login', { title: 'Login' , 
	message: 'Dont have an account? Create one '});  
}; 

module.exports = {  
registerF,
loginF
}; 