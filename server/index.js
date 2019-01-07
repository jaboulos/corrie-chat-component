const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = 3028;
const grabUsernameFromDb = require('../db');

app.use(express.static(path.join(__dirname, '../dist')));
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/users', (req, res) => {
  console.log(req.body);
  grabUsernameFromDb(req.body.id)
    .then(userObj => {
      return userObj;
    })
    .catch(err => {
      console.error('from server side, err');
    });
});

// app.get('/chat', (req, res) => {


// });

app.listen(port, console.log('listening on port ' + port));
