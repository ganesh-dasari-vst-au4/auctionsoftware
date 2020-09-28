const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);

const indicationSchema = new mongoose.Schema(
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
    therapeuticareas: {
      type: String,
      required: false,
    },
  },
  { collection: "indications" }
);

const Indication = mongoose.model("Indication", indicationSchema);

module.exports = Indication;
