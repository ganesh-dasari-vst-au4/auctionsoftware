const Indication = require("./../Models/Indication");

const indicationController = {};

indicationController.add = (req, res) => {
  let { body } = req;
  console.log(body);
  Indication.create(body)
    .then((data) => {
      res.status(200).send({ status: true, data: data });
    })
    .catch((err) => {
      res.status(400).send({ status: false, err: err });
    });
};

indicationController.get = (req, res) => {
  Indication.find({})
    .populate("objectivefulltext")
    .then((data) => {
      res.status(200).send({ status: true, data: data });
    })
    .catch((err) => {
      res.status(400).send({ status: true, err: err });
    });
};

module.exports = indicationController;
