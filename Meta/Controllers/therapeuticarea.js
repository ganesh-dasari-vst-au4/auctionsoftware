const TherapeuticArea = require("./../Models/TherapeuticArea");
const therapeuticAreaController = {};

therapeuticAreaController.add = (req, res) => {
  let { body } = req;
  console.log(body);
  TherapeuticArea.create(body)
    .then((data) => {
      res.status(200).send({ status: true, data: data });
    })
    .catch((err) => {
      res.status(400).send({ status: false, err: err });
    });
};

therapeuticAreaController.get = (req, res) => {
  TherapeuticArea.find({})
    .populate("indication")
    .then((data) => {
      res.status(200).send({ status: true, data: data });
    })
    .catch((err) => {
      res.status(400).send({ status: true, err: err });
    });
};

module.exports = therapeuticAreaController;
