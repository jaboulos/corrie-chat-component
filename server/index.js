const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3028;

const func = require('../db/helperFunctions.js');
const models = require('../db/models.js');


app.use(cors());
app.use(express.static(path.join(__dirname, '../dist')));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//create
app.post('/users', (req, res)=>{
  models.User.create(req.body).then((data)=>{
    res.send(data)
  }).catch((err)=>{
    console.log('error in user creation', err);
    res.sendStatus(400);
  })
})

//read
//uses different function then the rest as so not to upset the front end
app.get('/users', (req, res) => {
  if (req.query.id){
    models.User.findByPk(req.query.id).then((user)=>{
      res.send(user);
    }).catch((err)=> {
      console.log('error in fetching user', err);
      res.sendStatus(400);
    })
  }
  else res.send(404);
});

//update
app.put('/users', (req, res)=> {
  console.log('body', req.body);
  models.User.update(req.body.values, {where: {id: req.body.id}}).then((data)=>{
    res.send(data);
  }).catch((err) => {
    console.log('error in update', err)
    res.sendStatus(400);
  })
})

//delete
app.delete('/users', (req, res)=>{
  models.User.destroy({where:{id: req.query.id}}).then(()=> {
    res.end()
  }).catch((err)=>{
    console.log('error in deletion', err);
    res.sendStatus(400)
  })
})




app.listen(port, console.log('listening on port ' + port));
