const { Sequelize } = require("sequelize");

const { databasePort, user, host, database, password } = require("./config");

const sequelize = new Sequelize(database, user, password, {
  host,
  port: databasePort,
  dialect: "postgres",
});

const connectToDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("connected to the database");
  } catch (err) {
    console.log("failed to connect to the database");
    return process.exit(1);
  }

  return null;
};

module.exports = { connectToDatabase, sequelize };
