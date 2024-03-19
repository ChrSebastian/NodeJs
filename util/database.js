const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "sebi98", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
