# Twitch Chat Component

Twitch chat is an integral part of Twitch.tv. It is a service that allows viewers to interact with each other and the streamer by displaying user’s messages. I have chosen to recreate this experience for educational purposes.

## Related Projects

  - https://github.com/RPT10-TACO-TUESDAY/george-categories-component
  - https://github.com/RPT10-TACO-TUESDAY/milena-menu-bar-component
  - https://github.com/RPT10-TACO-TUESDAY/faris-video-service-component

## Table of Contents

1. [Requirements](#requirements)
1. [Development](#development)


## Requirements
- Node 6.13.0


## Development

MYSQL Database Creation Instructions

1) Go to db/index.js and update line 4 and change 'WallacePennyToby' to your mysql password (or remove if you don't have a password)
2) Type the following commands in your terminal:
  For those with passwords:
    1) mysql -u root -p < db/schema.sql
    1.5) type in your password when prompted
    2) npm run seed
  For those without passwords:
    1) mysql -u root < db/schema.sql
    2) npm run seed

CRUD Operations Instructions

Basic shape of json user object to be included in request body:

{
   username: String,
   twitch_sub: Boolean,
   mod_status: Boolean,
   color: String (should be in hex format, eg. #ffffff)
}

CREATE

- send POST request to '/users' with json object containing values you want created user to have

READ

- send GET request to '/users.' Include user id in query

UPDATE

- send PUT request to '/users.' Include json object with two values: 'id', the id of the user you want to update, and 'values', an object containing the key-value pairs you want to update

DESTROY

- send DELETE request to '/users' Include user id in query

### Installing Dependencies

From within the root directory:

-npm install
-npm build (to start webpack)
-npm start (to start the server)
/*


# anna-chat-component
