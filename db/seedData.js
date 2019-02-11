const faker = require('faker');
const models = require('./models.js');

function generateRandomUserObject() {
  function randomBool() {
    return Math.random() * 2 > 1 ? true : false;
  }
  function randomHexColor() {
    var letters = "0123456789abcdef";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      var index = Math.floor(Math.random() * 16);
      color += letters[index];
    }
    return color;
  }
  let newUser = {
    username: faker.internet.userName(),
    twitch_sub: randomBool(),
    mod_status: randomBool(),
    color: randomHexColor()
  };
  return newUser;
}

function generateNumberofRandomUsers(n) {
  let userObjects = [];
  if (!n) n = 10;
  for (var i = 0; i < n; i++) {
    userObjects.push(generateRandomUserObject());
  }
  return userObjects;
}

async function seedData(numberOfBatches, batchSize) {
  for (let i = 0; i < numberOfBatches; i++) {
    let batch = generateNumberofRandomUsers(batchSize);
    await models.User.bulkCreate(batch)
      .catch(err => console.log('error seeding', err));
  }
}

seedData(10, 1);

module.exports = generateNumberofRandomUsers;