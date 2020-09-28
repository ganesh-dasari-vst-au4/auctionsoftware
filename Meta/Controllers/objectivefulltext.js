const ObjectiveFullText = require("./../Models/ObjectiveFullText");

const objectiveFullTextController = {};

objectiveFullTextController.add = (req, res) => {
  let { body } = req;
  console.log(body);
  ObjectiveFullText.create(body)
    .then((data) => {
      res.status(200).send({ status: true, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send({ status: false, err: err });
    });
};

objectiveFullTextController.get = (req, res) => {
  ObjectiveFullText.find({})
    .then((data) => {
      res.status(200).send({ status: true, data: data });
    })
    .catch((err) => {
      res.status(400).send({ status: false, err: err });
    });
};

objectiveFullTextController.update = (req, res) => {
  let { params, body } = req;
  console.log(params._id, body);

  ObjectiveFullText.findByIdAndUpdate({ _id: params._id }, body)
    .then((data) => {
      res.status(200).send({ status: true, data: data });
    })
    .catch((err) => {
      res.status(400).send({ status: false, err: err });
    });
};

objectiveFullTextController.one = (req, res) => {
  let { params } = req;
  ObjectiveFullText.findOne({ _id: params._id })
    .then((data) => {
      res.status(200).send({ status: true, data: data });
    })
    .catch((err) => {
      res.status(400).send({ status: false, err: err });
    });
};

objectiveFullTextController.delete = (req, res) => {
  let { params } = req;
  ObjectiveFullText.findByIdAndDelete({ _id: params._id })
    .then((data) => {
      res.status(200).send({ status: true, data: data });
    })
    .catch((err) => {
      res.status(400).send({ status: false, err: err });
    });
};

module.exports = objectiveFullTextController;
