const Sequelize = require('sequelize');
const sequelize = require('./index.js');

const User = sequelize.define('users', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  username: {
    type: Sequelize.STRING
  },
  twitch_sub: {
    type: Sequelize.BOOLEAN
  },
  mod_status: {
    type: Sequelize.BOOLEAN
  },
  color: {
    type: Sequelize.STRING
  }
});

const Chat = sequelize.define('chats', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  video_timestamp: {
    type: Sequelize.STRING
  },
  chat: {
    type: Sequelize.TEXT
  },
  user_id: {
    type: Sequelize.INTEGER,
    references: 'users',
    referencesKey: 'id'
  },
  video_id: {
    type: Sequelize.INTEGER
  }
});

User.hasMany(Chat);

module.exports.User = User;
module.exports.Chat = Chat;