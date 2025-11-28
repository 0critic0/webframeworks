/* Controller for library */ 

const request = require('request'); 

const libraryF = function(req, res){  
res.render('library', { 
	title: 'Currently - find a place to store all your reads!', 
	pageHeader: {  
	title: 'Currently',  
	strapline: 'Find a place to store all your reads!'  
	},
library: [{  
name: 'Love Game', 
author: 'Emma Rae', 
rating: 3, 
genres: ['Fiction', 'Romance', 'Sport'], 
status: 'Completed' 
},
{  
name: 'Silent Evidence', 
author: 'Dr. Michael Chen', 
rating: 4, 
genres: ['Mystery', 'Crime', 'Adventure'], 
status: 'Completed' 
},
{  
name: 'Forgotten Heir ', 
author: 'Sebastian Blackwood', 
rating: 4.5, 
genres: ['Historical', 'Fame', 'Mystery'], 
status: 'Reading' 
}]
});  
}; 

module.exports = {  
libraryF
}; 