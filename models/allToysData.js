const mongoose = require("mongoose");

const toysSchema = new mongoose.Schema({
  name: { type: String, required: true },
  img: { type: String, required: true },
  price: { type: String, required: true },
  discription: { type: String, required: true },
  comments: { type: Array, required: false },
});

const allToysData = mongoose.model("Toys", toysSchema);
module.exports = allToysData;
