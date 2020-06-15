const db = require("../database");
const Sequelize = require("sequelize");
const User = require("./User");
const Category = require("./Category");

let Project = db.define(
  "project",
  {
    p_name: {
      type: Sequelize.STRING,
    },
  },
  {
    timestamps: true,
  }
);

Project.belongsTo(User, { foreignKey: "user_id" });
Project.belongsTo(Category, { foreignKey: "cid" });

db.sync().then((res) => {
  console.log("table DB is created", res);
});

module.exports = Project;
