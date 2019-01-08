const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3028;
const grabUsernameFromDb = require('../db');

app.use(cors());
app.use(express.static(path.join(__dirname, '../dist')));

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.urlencoded({ extended: true }));

app.get('/users', (req, res) => {
  return grabUsernameFromDb(req.query.id)
    .then(userObj => {
      res.send(userObj);
    })
    .catch(err => {
      console.error('from server side, err');
    });
});

// app.get('/chat', (req, res) => {


// });

app.listen(port, console.log('listening on port ' + port));
