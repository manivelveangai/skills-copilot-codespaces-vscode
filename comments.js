// create a webserver
const express = require('express');
const app = express();

// parse the request body
app.use(express.json());

// store the comments
const comments = [];

// create a route to get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// create a route to add a comment
app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.json(comment);
});

// start the server
app.listen(4001, () => {
  console.log('comments service started on port 4001');
});


