/* Controller for login/register */ 

const registerF = function(req, res){  
res.render('register', { title: 'Register' });  
}; 

const loginF = function(req, res){  
res.render('login', { title: 'Login' });  
}; 

module.exports = {  
registerF,
loginF
}; 