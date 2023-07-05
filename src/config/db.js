const { Sequelize, DataTypes } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  }
);

//Funcion que sincrita la base de datos
const db_connection = () => {
  try {
    sequelize.sync({ force: false });
    console.log("Base de datos sincronizada");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  sequelize,
  DataTypes,
  db_connection,
};
