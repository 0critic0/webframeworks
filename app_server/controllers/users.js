/* Controller for users login/register */
const mongoose = require('mongoose');
const passport = require('passport');
const User = mongoose.model('User');  
const registerF = function(req, res) {
  res.render('register', {
    title: 'Register',
    message: 'Already have an account? Log in'
  });
};

const loginF = function(req, res) {
  res.render('login', {
    title: 'Login',
    message: 'Don\'t have an account? Create one',
    user: req.user,           
    error: req.flash('error') 
  });
};

const registerU = function(req, res, next) {
  console.log('POST / received');
  
  // Check required fields
  if (!req.body.forename || !req.body.email || !req.body.password) {
    return res.render('register', {
      title: 'Registration Error',
      message: 'Registration failed',
      error: 'Missing required fields'
    });
  }

  // Use Passport's register method if available
  if (User.register && typeof User.register === 'function') {
    console.log('Using User.register()');
    User.register(
      new User({
        email: req.body.email,
        name: req.body.forename,
        phone: req.body.phone || '',
        address: req.body.address || ''
      }),
      req.body.password,
      (err, user) => {
        if (err) {
          console.log('Registration error:', err);
          let errorMessage = 'Registration failed';
          
          if (err.code === 11000) {
            errorMessage = 'Email already exists';
          } else if (err.message) {
            errorMessage = err.message;
          }
          
          return res.render('register', {
            title: 'Registration Error',
            message: 'Registration failed',
            error: errorMessage
          });
        }
        
        console.log('User registered with Passport:', user);
        
        // Auto-login (THIS WILL WORK NOW)
        passport.authenticate('local')(req, res, () => {
          req.session.save((err) => {
            if (err) return next(err);
            res.redirect('/library');
          });
        });
      }
    );
  } else {
    console.log('User.register not available - redirecting to login');
    
    // Fallback: Create user then redirect to login
    const newUser = new User({
      email: req.body.email,
      name: req.body.forename,
      phone: req.body.phone || '',
      address: req.body.address || '',
      password: req.body.password
    });
    
    newUser.save()
      .then(user => {
        console.log('User created (fallback):', user);
        // Redirect to login instead of trying to auto-login
        res.redirect('/login?message=Registration successful! Please login.');
      })
      .catch(err => {
        console.log('Error:', err);
        let errorMessage = 'Registration failed';
        
        if (err.code === 11000) {
          errorMessage = 'Email already exists';
        } else if (err.message) {
          errorMessage = err.message;
        }
        
        res.render('register', {
          title: 'Registration Error',
          message: 'Registration failed',
          error: errorMessage
        });
      });
  }
};
const loginU = function(req, res, next) {
  // Passport authenticate from lab code
  passport.authenticate('local', { 
    failureRedirect: '/login', 
    failureFlash: true 
  })(req, res, function() {
    req.session.save((err) => {
      if (err) {
        return next(err);
      }
      res.redirect('/library'); 
    });
  });
};

const logoutU = function(req, res, next) {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
  });
  req.session.save((err) => {
    if (err) {
      return next(err);
    }
    res.redirect('/');
  });
};

module.exports = {
  registerF,
  loginF,
  registerU,
  loginU,      
  logoutU    
};