const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  password: { type: String, required: true },
  admin: Boolean,
});

const allusers = mongoose.model("users", usersSchema);
module.exports = allusers;
