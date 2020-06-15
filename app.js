const express = require("express");
const app = express();
const db = require("./database");
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

const User = require("./Models/User");
const Category = require("./Models/Category");
const Project = require("./Models/Project");
const controller = require("./Controllers/project");

app.get("/", (req, res) => {
  res.send("hello User");
});

app.get("/list", controller.list);

app.post("/add", controller.add);

module.exports = app;
