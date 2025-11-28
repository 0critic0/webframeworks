/* Controller for library */ 
const request = require('request'); 

const apiOptions = {  
  server: 'http://localhost:3000'  
};  

if (process.env.NODE_ENV === 'production') {  
  apiOptions.server = 'https://express-wd-lab4.onrender.com';
}

const _renderLibrary = function(req, res, responseBody){  
  res.render('library', { 
    title: 'Currently - find a place to store all your reads!', 
    pageHeader: {  
      title: 'Currently',  
      strapline: 'Find a place to store all your reads!'  
    },
    library: responseBody  // Use API data instead of hardcoded
  });  
};

const libraryF = function(req, res){  
  const path = '/api/library';  
  const requestOptions = {  
    url: apiOptions.server + path,  
    method: 'GET',  
    json: {},  
    qs: {} 
  };  
  request(requestOptions, (err, response, body) => {  
_renderLibrary(req, res, body); 
  }); 
};

const bookDetail = function(req, res){  
  const path = `/api/library/${req.params.bookid}`;  
  const requestOptions = {  
    url: apiOptions.server + path,  
    method: 'GET',  
    json: {} 
  };  
  request(requestOptions, (err, response, body) => {  
    _renderBookDetail(req, res, body); 
  }); 
};

const _renderBookDetail = function(req, res, bookData){  
  res.render('book-detail', { 
    title: bookData.name,
    book: bookData
  });  
};

module.exports = {  
  libraryF,
bookDetail 
};