module.exports = {
  mongodb: {
    uri: 'mongodb+srv://hidden5634_db_user:Waterloo33@cluster0.68gqxcj.mongodb.net/Currently'
  },
  api: {
    server: process.env.NODE_ENV === 'production' 
      ? 'https://express-wd-lab4.onrender.com' 
      : 'http://localhost:3000'
  }
};