const models = require('./models.js');

const grabUsernameFromDb = (id) => {
  return models.User.findByPk(id)
    .then((foundUser) => {
      const username = foundUser.dataValues;
      return username;
    })
    .catch((err) => {
      console.error('from db', err);
    });
};

module.exports.grabUsernameFromDb = grabUsernameFromDb;