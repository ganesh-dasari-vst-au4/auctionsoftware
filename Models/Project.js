const db = require("../database");
const Sequelize = require("sequelize");

let Project = db.define(
  "project",
  {
    p_name: {
      type: Sequelize.STRING,
      notNull: true,
    },
    user: {
      type: Sequelize.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
    },
    category: {
      type: Sequelize.INTEGER,
      references: {
        model: "categories",
        key: "id",
      },
    },
    created_at: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
  },
  {
    timestamps: false,
  }
);

db.sync().then((res) => {
  console.log("table DB is created", res);
});

module.exports = Project;
