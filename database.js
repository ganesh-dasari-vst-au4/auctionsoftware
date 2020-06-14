const Sequelize = require("sequelize");

const db = new Sequelize("auction", "postgres", "12345", {
  host: "localhost",
  dialect: "postgres",
});

db.authenticate().then(() => {
  console.log("DB connection is estabalised");
});

module.exports = db;
