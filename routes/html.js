const path = require('path');
const app = require('express').Router();

// This view route is a GET route for the feedback page
app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/notes.html'))
  );
  
  app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/index.html'))
  );

  module.exports= app;
  