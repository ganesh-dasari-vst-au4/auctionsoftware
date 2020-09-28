const express = require("express");
const app = express();
const db = require("./database");
const cors = require("cors");
const path = require("path");

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

// import controller
// const controller = require("./Controllers/index");

// //Routes
// //Routes for objectivefulltext
// app.post("/objectivefulltext", controller.objectiveFullTextController.add);
// app.get("/objectivefulltext", controller.objectiveFullTextController.get);

// //Routes for indication
// app.post("/indication", controller.indicationController.add);
// app.get("/indication", controller.indicationController.get);

// //Routes for therapeuticarea
// app.post("/therapeuticarea", controller.therapeuticAreaController.add);
// app.get("/therapeuticarea", controller.therapeuticAreaController.get);

module.exports = app;
