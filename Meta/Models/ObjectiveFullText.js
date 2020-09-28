const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);

const objectiveFullTextSchema = new mongoose.Schema(
  {
    value: {
      type: String,
      unique: true,
      required: true,
    },
    format: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    definition: {
      type: String,
      required: false,
    },
    indication: {
      type: String,
      required: true,
    },
  },
  { collection: "objectivefulltexts" }
);

const ObjectiveFullText = mongoose.model(
  "ObjectiveFullText",
  objectiveFullTextSchema
);

module.exports = ObjectiveFullText;
