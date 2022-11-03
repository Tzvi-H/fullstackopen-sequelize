require("dotenv").config();

const { user, host, database, password, databasePort, secret } = process.env;

module.exports = {
  user,
  host,
  database,
  password,
  databasePort,
  PORT: process.env.PORT || 3001,
  SECRET: secret,
};
