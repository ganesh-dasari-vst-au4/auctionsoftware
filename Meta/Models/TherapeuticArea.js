const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);

const therapeuticAreaSchema = new mongoose.Schema(
  {
    value: {
      type: String,
      unique: true,
      required: true,
    },
    display_order: {
      type: Number,
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
  },
  { collection: "therapeuticareas" }
);

const TherapeuticArea = mongoose.model(
  "TherapeuticArea",
  therapeuticAreaSchema
);

module.exports = TherapeuticArea;
