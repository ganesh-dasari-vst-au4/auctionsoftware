const Project = require("./../Models/Project");
const User = require("../Models/User");
const Category = require("../Models/Category");

const ProjectController = {};

ProjectController.add = (req, res) => {
  try {
    let { body } = req;

    let project = Project.create({
      p_name: body.p_name,
      user_id: body.user_id,
      cid: body.cid,
    });

    res.send(project);
  } catch (error) {
    console.log(error);
  }
};

ProjectController.list = (req, res) => {
  try {
    Project.findAll({
      include: [{ model: User }, { model: Category }],
    }).then((data) => {
      res.send(data);
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = ProjectController;
