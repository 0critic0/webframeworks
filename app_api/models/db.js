const config = require('../../config');
const mongoose = require('mongoose');


 const dbURI = config.mongodb.uri;

 try {
 	mongoose.connect(dbURI).then(
     () => {console.log("Mongoose is connected")},
     err => {console.log(err)}

   );
 } catch (e) {
   console.log("could not connect");
 }

require('./book');
require('./user'); 