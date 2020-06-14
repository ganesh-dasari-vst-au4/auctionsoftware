const express = require("express");
const app = express();
const db = require("./database");

app.use(express.json());

const User = require("./Models/User");
const Category = require("./Models/Category");
const Project = require("./Models/Project");

app.get("/", (req, res) => {
  res.send("hello User");
});

module.exports = app;
