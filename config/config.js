require('dotenv').config()

module.exports = {
  "development": {
    "username": process.env.USER_DB,
    "password": process.env.PASSWORD_DB,
    "database": process.env.NAME_DB,
    "host": process.env.HOST_DB,
    "dialect": process.env.DIALECT_DB
  },
  "test": {
    "username": process.env.USER_DB,
    "password": process.env.PASSWORD_DB,
    "database": process.env.NAME_DB,
    "host": process.env.HOST_DB,
    "dialect": process.env.DIALECT_DB
  },
  "production": {
    "username": process.env.USER_DB,
    "password": process.env.PASSWORD_DB,
    "database": process.env.NAME_DB,
    "host": process.env.HOST_DB,
    "dialect": process.env.DIALECT_DB
  }
}
