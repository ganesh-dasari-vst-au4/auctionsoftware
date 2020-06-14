const db = require("../database");
const Sequelize = require("sequelize");

let User = db.define(
  "user",
  {
    u_name: {
      type: Sequelize.STRING,
      notNull: true,
    },
  },
  { timestamps: false }
);

db.sync().then((res) => {
  console.log("table DB is created", res);
});

module.exports = User;
